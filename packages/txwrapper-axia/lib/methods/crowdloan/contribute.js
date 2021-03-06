"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contribute = void 0;
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
function contribute(args, info, options) {
    return (0, txwrapper_core_1.defineMethod)({
        method: {
            args,
            name: 'contribute',
            pallet: 'crowdloan',
        },
        ...info,
    }, options);
}
exports.contribute = contribute;
//# sourceMappingURL=contribute.js.map