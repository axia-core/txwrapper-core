import {
	itHasCorrectBaseTxInfo,
	AXIA_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@axia-core/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { payoutStakers } from './payoutStakers';

describe('staking::payoutStakers', () => {
	it('should work', () => {
		const unsigned = payoutStakers(
			TEST_METHOD_ARGS.staking.payoutStakers,
			TEST_BASE_TX_INFO,
			AXIA_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x0812d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d64000000'
		);
	});
});
