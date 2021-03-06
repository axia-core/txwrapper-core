"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMemo = void 0;
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
function addMemo(args, info, options) {
    return (0, txwrapper_core_1.defineMethod)({
        method: {
            args,
            name: 'addMemo',
            pallet: 'crowdloan',
        },
        ...info,
    }, options);
}
exports.addMemo = addMemo;
//# sourceMappingURL=addMemo.js.map