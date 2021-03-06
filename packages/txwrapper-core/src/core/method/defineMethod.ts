/**
 * @ignore
 */ /** */
import { EXTRINSIC_VERSION } from '@axia-js/types/extrinsic/v4/Extrinsic';
import { ModuleExtrinsics } from '@axia-js/types/metadata/decorate/types';
import { stringCamelCase } from '@axia-js/util';

import { OptionsWithMeta, TxInfo, UnsignedTransaction } from '../../types/';
import { createDecoratedTx, createMetadata } from '../metadata';

/**
 * Default values for tx info, if the user doesn't specify any
 */
const DEFAULTS = {
	/**
	 * Don't add any tip by default.
	 */
	tip: 0,
	/**
	 * Construct a mortal extrinsic of ~6m24s minutes.
	 */
	eraPeriod: 64,
};

/**
 * Helper function to construct an offline method.
 *
 * @param info - All info necessary to construct a method. That includes base
 * tx info, as well as method name & arguments.
 */
export function defineMethod(
	info: TxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	const { metadataRpc, registry } = options;
	registry.setMetadata(createMetadata(registry, metadataRpc));

	const tx = createDecoratedTx(registry, metadataRpc);

	const methodFunction =
		!!tx[info.method.pallet] &&
		(tx[info.method.pallet] as unknown as ModuleExtrinsics)[info.method.name];
	if (!methodFunction) {
		throw new Error('pallet or method not found in metadata');
	}

	const method = methodFunction(
		...methodFunction.meta.args.map((arg) => {
			if (
				info.method.args[stringCamelCase(arg.name.toString())] === undefined
			) {
				throw new Error(
					`Method ${info.method.pallet}::${
						info.method.name
					} expects argument ${arg.toString()}, but got undefined`
				);
			}

			return info.method.args[stringCamelCase(arg.name.toString())];
		})
	).toHex();

	const eraPeriod =
		// If `info.eraPeriod` is set, use it.
		info.eraPeriod ||
		// As last resort, take the default value.
		DEFAULTS.eraPeriod;

	return {
		address: info.address,
		blockHash: info.blockHash,
		blockNumber: registry.createType('BlockNumber', info.blockNumber).toHex(),
		era: registry
			.createType('ExtrinsicEra', {
				current: info.blockNumber,
				period: eraPeriod,
			})
			.toHex(),
		genesisHash: info.genesisHash,
		metadataRpc,
		method,
		nonce: registry.createType('Compact<Index>', info.nonce).toHex(),
		signedExtensions: registry.signedExtensions,
		specVersion: registry.createType('u32', info.specVersion).toHex(),
		tip: registry
			.createType('Compact<Balance>', info.tip || DEFAULTS.tip)
			.toHex(),
		transactionVersion: registry
			.createType('u32', info.transactionVersion)
			.toHex(),
		version: EXTRINSIC_VERSION,
	};
}
