"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const bond_1 = require("./bond");
describe('staking::bond', () => {
    it('should work', () => {
        const unsigned = (0, bond_1.bond)(test_helpers_1.TEST_METHOD_ARGS.staking.bond, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.AXIA_25_TEST_OPTIONS);
        (0, txwrapper_core_1.itHasCorrectBaseTxInfo)(unsigned);
        expect(unsigned.method).toBe('0x08008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48910100');
    });
    it('should take "staked" or "Staked" as payee', () => {
        const unsignedLowerCase = (0, bond_1.bond)({ ...test_helpers_1.TEST_METHOD_ARGS.staking.bond, payee: 'staked' }, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.AXIA_25_TEST_OPTIONS);
        const unsignedCapitalized = (0, bond_1.bond)({ ...test_helpers_1.TEST_METHOD_ARGS.staking.bond, payee: 'Staked' }, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.AXIA_25_TEST_OPTIONS);
        expect(unsignedLowerCase.method).toBe(unsignedCapitalized.method);
    });
});
//# sourceMappingURL=bond.spec.js.map