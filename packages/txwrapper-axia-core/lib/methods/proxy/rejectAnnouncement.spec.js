"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@axia-core/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const rejectAnnouncement_1 = require("./rejectAnnouncement");
describe('proxy::rejectAnnouncement', () => {
    it('should work', () => {
        const unsigned = (0, rejectAnnouncement_1.rejectAnnouncement)(test_helpers_1.TEST_METHOD_ARGS.proxy.rejectAnnouncement, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.AXIA_25_TEST_OPTIONS);
        (0, txwrapper_core_1.itHasCorrectBaseTxInfo)(unsigned);
        expect(unsigned.method).toBe('0x1d088eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48474235772ae94433aee7d1befac0bfcc35fd0b5dfcf0cfc14bba7d5bbe35b778');
    });
});
//# sourceMappingURL=rejectAnnouncement.spec.js.map