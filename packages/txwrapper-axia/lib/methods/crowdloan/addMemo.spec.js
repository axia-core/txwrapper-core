"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const addMemo_1 = require("./addMemo");
describe('crowdloan::addMemo', () => {
    it('should work', () => {
        const unsigned = (0, addMemo_1.addMemo)(test_helpers_1.TEST_METHOD_ARGS.crowdloan.addMemo, txwrapper_core_1.TEST_BASE_TX_INFO, test_helpers_1.WESTEND_9030_TEST_OPTIONS);
        (0, txwrapper_core_1.itHasCorrectBaseTxInfo)(unsigned);
        expect(unsigned.method).toBe('0x40060c00000020ffffffffffffffff');
    });
});
//# sourceMappingURL=addMemo.spec.js.map