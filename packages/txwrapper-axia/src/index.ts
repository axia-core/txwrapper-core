import {
	getRegistryBase,
	GetRegistryOptsCore,
	getSpecTypes,
	AXIASS58Format,
	TypeRegistry,
} from '@axia-core/txwrapper-core';
import { methods as axia-coreMethods } from '@axia-core/txwrapper-axia-core';

import * as axiaMethods from './methods';

// Export methods of pallets included in the AXIA, Kusama, Westend, Rococo
// and State{mint, mine} runtimes.
// Note: in the future this may also include methods defined within this package
// that do not exist in Substrate.
export const methods = {
	balances: axia-coreMethods.balances,
	utility: axia-coreMethods.utility,
	proxy: axia-coreMethods.proxy,
	democracy: axia-coreMethods.democracy,
	session: axia-coreMethods.session,
	staking: axia-coreMethods.staking,
	system: axia-coreMethods.system,
	vesting: axia-coreMethods.vesting,
	multisig: axia-coreMethods.multisig,
	crowdloan: axiaMethods.crowdloan,
	// assets is only applicable to State{mint, mine}
	assets: axia-coreMethods.assets,
};

// Re-export all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@axia-core/txwrapper-core';

/**
 * `ChainProperties` for networks that txwrapper-axia supports. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty safe to hardcode them.
 */
const KNOWN_CHAIN_PROPERTIES = {
	kusama: {
		ss58Format: AXIASS58Format.kusama,
		tokenDecimals: 12,
		tokenSymbol: 'KSM',
	},
	axia: {
		ss58Format: AXIASS58Format.axia,
		tokenDecimals: 10,
		tokenSymbol: 'DOT',
	},
	westend: {
		ss58Format: AXIASS58Format.westend,
		tokenDecimals: 12,
		tokenSymbol: 'WND',
	},
	statemint: {
		ss58Format: AXIASS58Format.axia,
		tokenDecimals: 10,
		tokenSymbol: 'DOT',
	},
	statemine: {
		ss58Format: AXIASS58Format.kusama,
		tokenDecimals: 12,
		tokenSymbol: 'KSM',
	},
};

// We override the `specName` property of `GetRegistryOptsCore` in order to get narrower type specificity,
// hopefully creating a better experience for users.
/**
 * Options for txwrapper-axia's `getRegistry` function.
 */
export interface GetRegistryOpts extends GetRegistryOptsCore {
	specName: keyof typeof KNOWN_CHAIN_PROPERTIES;
}

/**
 * Get a type registry for networks that txwrapper-axia supports.
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
	// The default type registry has axia types
	const registry = new TypeRegistry();

	// As of now statemine is not a supported specName in the default axia-js/api type registry.
	const chainNameAdjusted = chainName === 'Statemine' ? 'Statemint' : chainName;
	const specNameAdjusted = specName === 'statemine' ? 'statemint' : specName;

	return getRegistryBase({
		chainProperties: properties || KNOWN_CHAIN_PROPERTIES[specName],
		specTypes: getSpecTypes(
			registry,
			chainNameAdjusted,
			specNameAdjusted,
			specVersion
		),
		metadataRpc,
	});
}
