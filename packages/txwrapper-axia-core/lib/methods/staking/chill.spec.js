"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const chill_1 = require("./chill");
describe('staking::chill', () => {
    it('should work', () => {
        const unsigned = (0, chill_1.chill)(test_helpers_1.TEST_METHOD_ARGS.staking.chill, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.AXIA_25_TEST_OPTIONS);
        (0, txwrapper_core_1.itHasCorrectBaseTxInfo)(unsigned);
        expect(unsigned.method).toBe('0x0806');
    });
});
//# sourceMappingURL=chill.spec.js.map