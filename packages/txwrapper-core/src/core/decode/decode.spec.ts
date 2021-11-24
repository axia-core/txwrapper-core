import {
	balancesTransfer,
	AXIA_25_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '../../test-helpers';
import { DecodedSigningPayload } from '../../types';
import { construct } from '..';
import { decode } from './decode';
import { itDecodesSignedBalancesTransferTx } from './decodeSignedTx.spec';
import { itDecodesSigningPayloadBalancesTransfer } from './decodeSigningPayload.spec';
import { itDecodesUnsignedBalanceTransferTx } from './decodeUnsignedTx.spec';
import { itDecodesBalancesTransferCommon } from './test-helpers';

describe('decode', () => {
	it('should decode signedTx', async () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			AXIA_25_TEST_OPTIONS
		);
		const signingPayload = construct.signingPayload(
			unsigned,
			AXIA_25_TEST_OPTIONS
		);
		const signature = await signWithAlice(signingPayload);
		const signedTx = construct.signedTx(
			unsigned,
			signature,
			AXIA_25_TEST_OPTIONS
		);

		const decoded = decode(signedTx, AXIA_25_TEST_OPTIONS);

		itDecodesSignedBalancesTransferTx(decoded);

		itDecodesBalancesTransferCommon(decoded);
	});

	it('decodes an unsigned tx', () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			AXIA_25_TEST_OPTIONS
		);
		const decoded = decode(unsigned, AXIA_25_TEST_OPTIONS);

		itDecodesUnsignedBalanceTransferTx(decoded);

		itDecodesBalancesTransferCommon(decoded);
	});

	it('should decode signing payload', () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			AXIA_25_TEST_OPTIONS
		);
		const signingPayload = construct.signingPayload(
			unsigned,
			AXIA_25_TEST_OPTIONS
		);

		const decoded = decode(
			signingPayload,
			AXIA_25_TEST_OPTIONS
		) as unknown as DecodedSigningPayload;

		itDecodesSigningPayloadBalancesTransfer(decoded);

		itDecodesBalancesTransferCommon(decoded);
	});
});
