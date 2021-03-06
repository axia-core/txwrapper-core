import {
	itHasCorrectBaseTxInfo,
	AXIA_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@axia-core/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { proxy } from './proxy';

describe('proxy::proxy', () => {
	it('should work', () => {
		const unsigned = proxy(
			TEST_METHOD_ARGS.proxy.proxy,
			TEST_BASE_TX_INFO,
			AXIA_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x1d008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480100050030672121'
		);
	});
});
