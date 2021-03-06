"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdraw = void 0;
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
function withdraw(args, info, options) {
    return (0, txwrapper_core_1.defineMethod)({
        method: {
            args,
            name: 'withdraw',
            pallet: 'crowdloan',
        },
        ...info,
    }, options);
}
exports.withdraw = withdraw;
//# sourceMappingURL=withdraw.js.map