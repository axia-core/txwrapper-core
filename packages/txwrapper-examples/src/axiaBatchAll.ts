/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * @ignore Don't show this file in documentation.
 */

import { Keyring } from '@axia-js/api';
import { cryptoWaitReady } from '@axia-js/util-crypto';
import {
	construct,
	decode,
	deriveAddress,
	getRegistry,
	methods,
	AXIASS58Format,
} from '@axia-core/txwrapper-axia';

import { rpcToLocalNode, signWith } from './util';

/**
 * Entry point of the script. This script assumes a AXIA node is running
 * locally on `http://localhost:9933`.
 */
async function main(): Promise<void> {
	// Wait for the promise to resolve async WASM
	await cryptoWaitReady();
	// Create a new keyring, and add an "Alice" account
	const keyring = new Keyring();
	const alice = keyring.addFromUri('//Alice', { name: 'Alice' }, 'sr25519');
	console.log(
		"Alice's SS58-Encoded Address:",
		deriveAddress(alice.publicKey, AXIASS58Format.axia)
	);

	// Construct a balance transfer transaction offline.
	// To construct the tx, we need some up-to-date information from the node.
	// `txwrapper` is offline-only, so does not care how you retrieve this info.
	// In this tutorial, we simply send RPC requests to the node.
	const { block } = await rpcToLocalNode('chain_getBlock');
	const blockHash = await rpcToLocalNode('chain_getBlockHash');
	const genesisHash = await rpcToLocalNode('chain_getBlockHash', [0]);
	const metadataRpc = await rpcToLocalNode('state_getMetadata');
	const { specVersion, transactionVersion, specName } = await rpcToLocalNode(
		'state_getRuntimeVersion'
	);

	// Create AXIA's type registry.
	const registry = getRegistry({
		chainName: 'AXIA',
		specName,
		specVersion,
		metadataRpc,
	});

	// Metadata and type defintion registry used to create the calls
	const optionsWithMeta = {
		registry: registry,
		metadataRpc: metadataRpc,
	};

	// Arguments for 12 balances transferKeepAlive
	const transferArgs = [
		{
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			value: '1000000000',
		},
		{
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			value: '2000000000',
		},
		{
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			value: '3000000000',
		},
		{
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			value: '4000000000',
		},
		{
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			value: '5000000000',
		},
		{
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			value: '6000000000',
		},
		{
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			value: '7000000000',
		},
		{
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			value: '8000000000',
		},
		{
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			value: '9000000000',
		},
		{
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			value: '10000000000',
		},
		{
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			value: '11000000000',
		},
		{
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			value: '12000000000',
		},
	];

	// Create an array of `balances.transferKeepAlive().method`s. We just need the
	// `method` from the `UnsignedTransaction` that txwrapper methods returns.
	const txMethods = transferArgs.map((args) => {
		const txInfo = methods.balances.transferKeepAlive(
			args,
			{
				address: alice.address,
				blockHash: blockHash,
				blockNumber: block.header.number,
				genesisHash,
				metadataRpc,
				nonce: 0,
				specVersion: specVersion,
				transactionVersion,
			},
			optionsWithMeta
		);

		return txInfo.method;
	});

	// Create a `utility.batchAll` unsigned tx. Based on the above code the
	// `calls` argument for `batchAll` (`txMethods`)  is of type
	// `Array<UnsignedTransaction.method>`
	const unsigned = methods.utility.batchAll(
		{
			calls: txMethods,
		},
		{
			address: alice.address,
			blockHash: blockHash,
			blockNumber: block.header.number,
			genesisHash,
			metadataRpc,
			nonce: 0,
			specVersion: specVersion,
			tip: 0,
			eraPeriod: 64,
			transactionVersion,
		},
		optionsWithMeta
	);

	// Decode an unsigned transaction.
	const decodedUnsigned = decode(unsigned, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction\n  calls: ${JSON.stringify(
			decodedUnsigned.method.args.calls
		)}\n`
	);

	// Construct the signing payload from an unsigned transaction.
	const signingPayload = construct.signingPayload(unsigned, { registry });
	console.log(`\nPayload to Sign: ${signingPayload}`);

	// Decode the information from a signing payload.
	const payloadInfo = decode(signingPayload, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction\n  calls: ${JSON.stringify(
			payloadInfo.method.args.calls
		)}\n`
	);

	// Sign a payload. This operation should be performed on an offline device.
	const signature = signWith(alice, signingPayload, {
		metadataRpc,
		registry,
	});
	console.log(`\nSignature: ${signature}`);

	// Serialize a signed transaction.
	const tx = construct.signedTx(unsigned, signature, {
		metadataRpc,
		registry,
	});
	console.log(`\nTransaction to Submit: ${tx}`);

	// Derive the tx hash of a signed transaction offline.
	const expectedTxHash = construct.txHash(tx);
	console.log(`\nExpected Tx Hash: ${expectedTxHash}`);

	// Send the tx to the node. Again, since `txwrapper` is offline-only, this
	// operation should be handled externally. Here, we just send a JSONRPC
	// request directly to the node.
	const actualTxHash = await rpcToLocalNode('author_submitExtrinsic', [tx]);
	console.log(`Actual Tx Hash: ${actualTxHash}`);

	// Decode a signed payload.
	const txInfo = decode(tx, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction\n  calls: ${JSON.stringify(
			txInfo.method.args.calls
		)}\n`
	);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
