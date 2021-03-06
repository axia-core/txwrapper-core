"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAsMulti = void 0;
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function cancelAsMulti(args, info, options) {
    return (0, txwrapper_core_1.defineMethod)({
        method: {
            args,
            name: 'cancelAsMulti',
            pallet: 'multisig',
        },
        ...info,
    }, options);
}
exports.cancelAsMulti = cancelAsMulti;
//# sourceMappingURL=cancelAsMulti.js.map