"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_METHOD_ARGS = exports.WESTEND_9030_TEST_OPTIONS = void 0;
const index_1 = require("../index");
const westendMetadataRpc9030_1 = __importDefault(require("./westendMetadataRpc9030"));
exports.WESTEND_9030_TEST_OPTIONS = {
    metadataRpc: westendMetadataRpc9030_1.default,
    registry: (0, index_1.getRegistry)({
        specName: 'westend',
        chainName: 'Westend',
        specVersion: 9030,
        metadataRpc: westendMetadataRpc9030_1.default,
    }),
};
/**
 * Centralized source for all arguments used in specs for methods.
 */
exports.TEST_METHOD_ARGS = {
    crowdloan: {
        contribute: {
            value: '90071992547409910',
            index: 12,
            signature: {
                Sr25519: '0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
            },
        },
        withdraw: {
            index: 12,
            who: 'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P', // seed "//Charlie"
        },
        addMemo: {
            index: 12,
            memo: '0xFFFFFFFFFFFFFFFF',
        },
    },
};
//# sourceMappingURL=constants.js.map