"use strict";
// Various metadata related constants and registry creator used for testing and
// and also for consumption.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistryAXIA = void 0;
const types_1 = require("@axia-js/types");
const types_known_1 = require("@axia-js/types-known");
const core_1 = require("../core");
/**
 * Get the AXIA type registry for a given spec version for testing purposes
 *
 * @param specVersion
 * @param metadataRpc
 */
function getRegistryAXIA(specVersion, metadataRpc) {
    return (0, core_1.getRegistryBase)({
        chainProperties: {
            ss58Format: 0,
            tokenDecimals: 10,
            tokenSymbol: 'DOT',
        },
        specTypes: (0, types_known_1.getSpecTypes)(new types_1.TypeRegistry(), 'AXIA', 'axia', specVersion),
        metadataRpc,
    });
}
exports.getRegistryAXIA = getRegistryAXIA;
//# sourceMappingURL=getRegistryAXIA.js.map