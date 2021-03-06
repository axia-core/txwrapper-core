"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const withdrawUnbonded_1 = require("./withdrawUnbonded");
describe('staking::withdrawUnbonded', () => {
    it('should work', () => {
        const unsigned = (0, withdrawUnbonded_1.withdrawUnbonded)(test_helpers_1.TEST_METHOD_ARGS.staking.withdrawUnbonded, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.AXIA_25_TEST_OPTIONS);
        (0, txwrapper_core_1.itHasCorrectBaseTxInfo)(unsigned);
        expect(unsigned.method).toBe('0x08030b000000');
    });
});
//# sourceMappingURL=withdrawUnbonded.spec.js.map