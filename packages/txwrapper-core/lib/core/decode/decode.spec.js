"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helpers_1 = require("../../test-helpers");
const __1 = require("..");
const decode_1 = require("./decode");
const decodeSignedTx_spec_1 = require("./decodeSignedTx.spec");
const decodeSigningPayload_spec_1 = require("./decodeSigningPayload.spec");
const decodeUnsignedTx_spec_1 = require("./decodeUnsignedTx.spec");
const test_helpers_2 = require("./test-helpers");
describe('decode', () => {
    it('should decode signedTx', async () => {
        const unsigned = (0, test_helpers_1.balancesTransfer)(test_helpers_1.TEST_METHOD_ARGS.balances.transfer, test_helpers_1.TEST_BASE_TX_INFO, test_helpers_1.AXIA_25_TEST_OPTIONS);
        const signingPayload = __1.construct.signingPayload(unsigned, test_helpers_1.AXIA_25_TEST_OPTIONS);
        const signature = await (0, test_helpers_1.signWithAlice)(signingPayload);
        const signedTx = __1.construct.signedTx(unsigned, signature, test_helpers_1.AXIA_25_TEST_OPTIONS);
        const decoded = (0, decode_1.decode)(signedTx, test_helpers_1.AXIA_25_TEST_OPTIONS);
        (0, decodeSignedTx_spec_1.itDecodesSignedBalancesTransferTx)(decoded);
        (0, test_helpers_2.itDecodesBalancesTransferCommon)(decoded);
    });
    it('decodes an unsigned tx', () => {
        const unsigned = (0, test_helpers_1.balancesTransfer)(test_helpers_1.TEST_METHOD_ARGS.balances.transfer, test_helpers_1.TEST_BASE_TX_INFO, test_helpers_1.AXIA_25_TEST_OPTIONS);
        const decoded = (0, decode_1.decode)(unsigned, test_helpers_1.AXIA_25_TEST_OPTIONS);
        (0, decodeUnsignedTx_spec_1.itDecodesUnsignedBalanceTransferTx)(decoded);
        (0, test_helpers_2.itDecodesBalancesTransferCommon)(decoded);
    });
    it('should decode signing payload', () => {
        const unsigned = (0, test_helpers_1.balancesTransfer)(test_helpers_1.TEST_METHOD_ARGS.balances.transfer, test_helpers_1.TEST_BASE_TX_INFO, test_helpers_1.AXIA_25_TEST_OPTIONS);
        const signingPayload = __1.construct.signingPayload(unsigned, test_helpers_1.AXIA_25_TEST_OPTIONS);
        const decoded = (0, decode_1.decode)(signingPayload, test_helpers_1.AXIA_25_TEST_OPTIONS);
        (0, decodeSigningPayload_spec_1.itDecodesSigningPayloadBalancesTransfer)(decoded);
        (0, test_helpers_2.itDecodesBalancesTransferCommon)(decoded);
    });
});
//# sourceMappingURL=decode.spec.js.map