"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProxy = void 0;
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
/**
 * Unregister a proxy account for the sender.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function removeProxy(args, info, options) {
    return (0, txwrapper_core_1.defineMethod)({
        method: {
            args,
            name: 'removeProxy',
            pallet: 'proxy',
        },
        ...info,
    }, options);
}
exports.removeProxy = removeProxy;
//# sourceMappingURL=removeProxy.js.map