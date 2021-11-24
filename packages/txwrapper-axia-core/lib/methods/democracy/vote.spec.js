"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const vote_1 = require("./vote");
describe('democracy::vote', () => {
    it('should work', () => {
        const unsigned = (0, vote_1.vote)(test_helpers_1.TEST_METHOD_ARGS.democracy.vote, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.AXIA_25_TEST_OPTIONS);
        (0, txwrapper_core_1.itHasCorrectBaseTxInfo)(unsigned);
        expect(unsigned.method).toBe('0x0a02000081d2040000000000000000000000000000');
    });
});
//# sourceMappingURL=vote.spec.js.map