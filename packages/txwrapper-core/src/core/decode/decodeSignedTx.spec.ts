import {
	balancesTransfer,
	AXIA_25_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '../../test-helpers';
import { DecodedSignedTx } from '../../types';
import { construct } from '..';
import { decodeSignedTx } from './decodeSignedTx';
import { itDecodesBalancesTransferCommon } from './test-helpers';

export function itDecodesSignedBalancesTransferTx(
	decoded: DecodedSignedTx
): void {
	(['address', 'metadataRpc', 'nonce', 'tip'] as const).forEach((key) =>
		expect(decoded[key]).toBe(TEST_BASE_TX_INFO[key])
	);
}

describe('decodeSignedTx', () => {
	it('should decode balances::transfer', async () => {
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

		const decoded = decodeSignedTx(signedTx, AXIA_25_TEST_OPTIONS);

		itDecodesSignedBalancesTransferTx(decoded);

		itDecodesBalancesTransferCommon(decoded);
	});
});
