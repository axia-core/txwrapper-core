"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const setController_1 = require("./setController");
describe('staking::setController', () => {
    it('should work', () => {
        const unsigned = (0, setController_1.setController)(test_helpers_1.TEST_METHOD_ARGS.staking.setController, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.AXIA_25_TEST_OPTIONS);
        (0, txwrapper_core_1.itHasCorrectBaseTxInfo)(unsigned);
        expect(unsigned.method).toBe('0x08088eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48');
    });
});
//# sourceMappingURL=setController.spec.js.map