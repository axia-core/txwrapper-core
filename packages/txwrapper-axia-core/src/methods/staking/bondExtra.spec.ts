import {
	itHasCorrectBaseTxInfo,
	AXIA_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@axia-core/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { bondExtra } from './bondExtra';

describe('staking::bondExtra', () => {
	it('should encode', () => {
		const unsigned = bondExtra(
			TEST_METHOD_ARGS.staking.bondExtra,
			TEST_BASE_TX_INFO,
			AXIA_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe('0x08019101');
	});
});
