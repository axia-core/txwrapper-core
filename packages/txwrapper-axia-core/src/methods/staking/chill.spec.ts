import {
	itHasCorrectBaseTxInfo,
	AXIA_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@axia-core/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { chill } from './chill';

describe('staking::chill', () => {
	it('should work', () => {
		const unsigned = chill(
			TEST_METHOD_ARGS.staking.chill,
			TEST_BASE_TX_INFO,
			AXIA_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe('0x0806');
	});
});
