"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferKeepAlive = void 0;
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
/**
 * Construct a balance transfer transaction offline.
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
            pallet: 'balances',
        },
        ...info,
    }, options);
}
exports.transferKeepAlive = transferKeepAlive;
//# sourceMappingURL=transferKeepAlive.js.map