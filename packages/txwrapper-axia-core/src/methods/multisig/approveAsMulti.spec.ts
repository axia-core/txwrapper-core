import {
	itHasCorrectBaseTxInfo,
	AXIA_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@axia-core/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { approveAsMulti } from './approveAsMulti';

describe('multisig::approveAsMulti', () => {
	it('should work', () => {
		const unsigned = approveAsMulti(
			TEST_METHOD_ARGS.multisig.approveAsMulti,
			TEST_BASE_TX_INFO,
			AXIA_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x1e0202000cd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4890b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22017b000000030000003078303530303330363732313231316435343034626439646138386530323034f6ffffffffff3f01'
		);
	});
});
