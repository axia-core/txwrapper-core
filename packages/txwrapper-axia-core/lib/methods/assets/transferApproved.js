"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferApproved = void 0;
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
/**
 * Transfer some asset balance from a previously delegated account to some third-party
 * account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function transferApproved(args, info, options) {
    return (0, txwrapper_core_1.defineMethod)({
        method: {
            args,
            name: 'transferApproved',
            pallet: 'assets',
        },
        ...info,
    }, options);
}
exports.transferApproved = transferApproved;
//# sourceMappingURL=transferApproved.js.map