import { typesBundleForAXIA } from '@acala-network/type-definitions';
import { TypeRegistry } from '@axia-js/types';
import { OverrideBundleType } from '@axia-js/types/types';
import { getSpecTypes } from '@axia-js/types-known';
import { getRegistryBase, AXIASS58Format } from '@axia-core/txwrapper-core';

/**
 * Mandala registry creator for testing.
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryMandala(
	specVersion: number,
	metadataRpc: string
): TypeRegistry {
	const registry = new TypeRegistry();
	registry.setKnownTypes({
		typesBundle: typesBundleForAXIA as unknown as OverrideBundleType,
	});

	return getRegistryBase({
		chainProperties: {
			tokenDecimals: 18,
			tokenSymbol: 'ACA',
			// axia-core prefix (42), is the common prefix for the test chains
			ss58Format: AXIASS58Format.axia-core,
		},
		specTypes: getSpecTypes(registry, 'Mandala', 'mandala', specVersion),
		metadataRpc,
	});
}
