import { methods as axia-coreMethods } from '@axia-core/txwrapper-axia-core';

// Export methods of pallets included in your chain's runtime.
// Note: you may also want to create methods for pallets specifc to your chain. In that case
// consult the CHAIN_BUILDER.md guide.
export const methods = {
	balances: axia-coreMethods.balances,
	utility: axia-coreMethods.utility,
	proxy: axia-coreMethods.proxy,
};

// Rexport all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@axia-core/txwrapper-core';

// Re-export support getRegistry, which has support for chain types from @axia-js/apps-config
export {
	getRegistry,
	knownChainProperties,
} from '@axia-core/txwrapper-registry';
