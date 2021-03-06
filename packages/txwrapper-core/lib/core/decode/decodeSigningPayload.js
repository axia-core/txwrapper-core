"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeSigningPayload = void 0;
/**
 * @ignore
 */ /** */
const create_1 = require("@axia-js/types/create");
const Extrinsic_1 = require("@axia-js/types/extrinsic/v4/Extrinsic");
const __1 = require("..");
/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
function decodeSigningPayload(signingPayload, options) {
    const { metadataRpc, registry } = options;
    registry.setMetadata((0, __1.createMetadata)(registry, metadataRpc));
    // We use `createTypeUnsafe` here because it allows us to specify `withoutLog: true`,
    // which silences an internal error message from axia-js. This is helpful in `decode`
    // which takes in just a string. We determine if the string is a signing payload or a
    // signed tx by first attempting to decode it as a signing payload with this function.
    // If that fails we catch, knowing through process of elimination it should be a
    // signed tx. `withoutLog: true` prevents an alarming error message from bubbling up
    // to the user when we catch.
    const payload = (0, create_1.createTypeUnsafe)(registry, 'ExtrinsicPayload', [
        signingPayload,
        {
            version: Extrinsic_1.EXTRINSIC_VERSION,
        },
    ]);
    const methodCall = (0, create_1.createTypeUnsafe)(registry, 'Call', [payload.method]);
    const method = (0, __1.toTxMethod)(registry, methodCall);
    return {
        blockHash: payload.blockHash.toHex(),
        eraPeriod: payload.era.asMortalEra.period.toNumber(),
        genesisHash: payload.genesisHash.toHex(),
        metadataRpc,
        method,
        nonce: payload.nonce.toNumber(),
        specVersion: payload.specVersion.toNumber(),
        tip: payload.tip.toNumber(),
        transactionVersion: payload.transactionVersion.toNumber(),
    };
}
exports.decodeSigningPayload = decodeSigningPayload;
//# sourceMappingURL=decodeSigningPayload.js.map