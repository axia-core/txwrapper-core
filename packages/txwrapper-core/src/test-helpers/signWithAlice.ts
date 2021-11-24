import { Keyring } from '@axia-js/api';
import { cryptoWaitReady } from '@axia-js/util-crypto';

import { metadataRpc } from './constants';
import { getRegistryAXIA } from './getRegistryAXIA';

/**
 * Sign a payload with seed `//Alice`.
 */
export async function signWithAlice(
	signingPayload: string
): Promise<`0x${string}`> {
	// We're creating an Alice account that will sign the payload
	// Wait for the promise to resolve async WASM
	await cryptoWaitReady();

	const registry = getRegistryAXIA(25, metadataRpc);
	// Use ed25519 because it has deterministic signatures
	const keyring = new Keyring({ type: 'ed25519' });
	const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

	const { signature } = registry
		.createType('ExtrinsicPayload', signingPayload, {
			version: 4,
		})
		.sign(alice);

	return signature;
}
