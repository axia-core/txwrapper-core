"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferKeepAlive = void 0;
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
/**
 * Move some assets from the sender account to another, keeping the sender account alive.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function transferKeepAlive(args, info, options) {
    return (0, txwrapper_core_1.defineMethod)({
        method: {
            args,
            name: 'transferKeepAlive',
            pallet: 'assets',
        },
        ...info,
    }, options);
}
exports.transferKeepAlive = transferKeepAlive;
//# sourceMappingURL=transferKeepAlive.js.map