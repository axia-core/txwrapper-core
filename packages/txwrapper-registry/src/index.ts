import { typesBundle, typesChain } from '@axia-js/apps-config/api';
import { allNetworks as axia-coreSS58Registry } from '@axia-js/networks';
import { TypeRegistry } from '@axia-js/types';
import { getSpecTypes } from '@axia-js/types-known';
import {
	ChainProperties,
	getRegistryBase,
	GetRegistryOptsCore,
} from '@axia-core/txwrapper-core';

/**
 * Known chain properties based on the axia-core ss58 registry.
 * Chain properties are derived from the axia-core ss58 registry:
 * https://raw.githubusercontent.com/axia-core/axia-core/master/ss58-registry.json
 *
 * Alternatively, chain properties can be dynamically fetched through the
 * `system_properties` RPC call.
 */
export const knownChainProperties = axia-coreSS58Registry.reduce(
	(acc, { decimals, network, symbols, prefix }) => {
		if (network !== null) {
			acc[network] = {
				tokenDecimals: decimals,
				tokenSymbol: symbols,
				ss58Format: prefix,
			};
		}

		return acc;
	},
	{} as Record<string, ChainProperties>
);

// We override the`specName` property in order to get narrower type specificity. We add a doc
// comment to`properties` with relevant info. The goal is just to improve UX.
/**
 * Options for `getRegistry`.
 */
export interface GetRegistryOpts extends GetRegistryOptsCore {
	specName: keyof typeof knownChainProperties;
	/**
	 * Optionally specify the chain properties if they are not included in
	 * https://raw.githubusercontent.com/axia-core/axia-core/master/ss58-registry.json
	 * (and thus not included in `knownChainProperties`)
	 */
	properties?: ChainProperties;
}

/**
 * Create a registry with `knownTypes` set with types from @axia-js/apps-config.
 */
function getAppsConfigRegistry(): TypeRegistry {
	const registry = new TypeRegistry();
	registry.setKnownTypes({
		typesBundle,
		typesChain,
	});

	return registry;
}

/**
 * Create a registry based on specName, chainName, specVersion and metadataRPC. This should work for
 * AXIA, Kusama, Westend and any chain which has up-to-date types in @axia-js/apps-config.
 *
 * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime
 */
export function getRegistry({
	specName,
	chainName,
	specVersion,
	metadataRpc,
	properties,
}: GetRegistryOpts): TypeRegistry {
	// AXIA, kusama, and westend have known types in the default axia-js registry. If we are
	// dealing with another network, use the apps-config types to fill the registry.
	const registry = ['axia', 'kusama', 'westend'].includes(specName)
		? new TypeRegistry()
		: getAppsConfigRegistry();

	return getRegistryBase({
		chainProperties: properties || knownChainProperties[specName],
		// `getSpecTypes` is used to extract the chain specific types from the registries `knownTypes`
		specTypes: getSpecTypes(registry, chainName, specName, specVersion),
		metadataRpc,
	});
}
