"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistry = exports.knownChainProperties = void 0;
const api_1 = require("@axia-js/apps-config/api");
const networks_1 = require("@axia-js/networks");
const types_1 = require("@axia-js/types");
const types_known_1 = require("@axia-js/types-known");
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
/**
 * Known chain properties based on the axia-core ss58 registry.
 * Chain properties are derived from the axia-core ss58 registry:
 * https://raw.githubusercontent.com/axia/axia-core/master/ss58-registry.json
 *
 * Alternatively, chain properties can be dynamically fetched through the
 * `system_properties` RPC call.
 */
exports.knownChainProperties = networks_1.allNetworks.reduce((acc, { decimals, network, symbols, prefix }) => {
    if (network !== null) {
        acc[network] = {
            tokenDecimals: decimals,
            tokenSymbol: symbols,
            ss58Format: prefix,
        };
    }
    return acc;
}, {});
/**
 * Create a registry with `knownTypes` set with types from @axia/apps-config.
 */
function getAppsConfigRegistry() {
    const registry = new types_1.TypeRegistry();
    registry.setKnownTypes({
        typesBundle: api_1.typesBundle,
        typesChain: api_1.typesChain,
    });
    return registry;
}
/**
 * Create a registry based on specName, chainName, specVersion and metadataRPC. This should work for
 * AXIA, Kusama, Westend and any chain which has up-to-date types in @axia/apps-config.
 *
 * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime
 */
function getRegistry({ specName, chainName, specVersion, metadataRpc, properties, }) {
    // AXIA, kusama, and westend have known types in the default axia-js registry. If we are
    // dealing with another network, use the apps-config types to fill the registry.
    const registry = ['axia', 'kusama', 'westend'].includes(specName)
        ? new types_1.TypeRegistry()
        : getAppsConfigRegistry();
    return (0, txwrapper_core_1.getRegistryBase)({
        chainProperties: properties || exports.knownChainProperties[specName],
        // `getSpecTypes` is used to extract the chain specific types from the registries `knownTypes`
        specTypes: (0, types_known_1.getSpecTypes)(registry, chainName, specName, specVersion),
        metadataRpc,
    });
}
exports.getRegistry = getRegistry;
//# sourceMappingURL=index.js.map