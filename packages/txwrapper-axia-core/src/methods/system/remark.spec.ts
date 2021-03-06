import {
	itHasCorrectBaseTxInfo,
	AXIA_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@axia-core/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { remark } from './remark';

describe('system::remark', () => {
	it('should work', () => {
		const unsigned = remark(
			TEST_METHOD_ARGS.system.remark,
			TEST_BASE_TX_INFO,
			AXIA_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe('0x00011042194253');
	});
});
