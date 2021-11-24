// Various metadata related constants and registry creator used for testing and
// and also for consumption.

import { TypeRegistry } from '@axia-js/types';
import { getSpecTypes } from '@axia-js/types-known';

import { getRegistryBase } from '../core';

/**
 * Get the AXIA type registry for a given spec version for testing purposes
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryAXIA(
	specVersion: number,
	metadataRpc: string
): TypeRegistry {
	return getRegistryBase({
		chainProperties: {
			ss58Format: 0,
			tokenDecimals: 10,
			tokenSymbol: 'DOT',
		},
		specTypes: getSpecTypes(
			new TypeRegistry(),
			'AXIA',
			'axia',
			specVersion
		),
		metadataRpc,
	});
}
