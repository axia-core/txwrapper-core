"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const contribute_1 = require("./contribute");
describe('crowdloan::contribute', () => {
    it('should work', () => {
        const unsigned = (0, contribute_1.contribute)(test_helpers_1.TEST_METHOD_ARGS.crowdloan.contribute, txwrapper_core_1.TEST_BASE_TX_INFO, test_helpers_1.WESTEND_9030_TEST_OPTIONS);
        (0, txwrapper_core_1.itHasCorrectBaseTxInfo)(unsigned);
        expect(unsigned.method).toBe('0x40013013f6ffffffffff3f010101ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
    });
});
//# sourceMappingURL=contribute.spec.js.map