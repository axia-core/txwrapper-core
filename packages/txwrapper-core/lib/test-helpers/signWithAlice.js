"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signWithAlice = void 0;
const api_1 = require("@axia-js/api");
const util_crypto_1 = require("@axia-js/util-crypto");
const constants_1 = require("./constants");
const getRegistryAXIA_1 = require("./getRegistryAXIA");
/**
 * Sign a payload with seed `//Alice`.
 */
async function signWithAlice(signingPayload) {
    // We're creating an Alice account that will sign the payload
    // Wait for the promise to resolve async WASM
    await (0, util_crypto_1.cryptoWaitReady)();
    const registry = (0, getRegistryAXIA_1.getRegistryAXIA)(25, constants_1.metadataRpc);
    // Use ed25519 because it has deterministic signatures
    const keyring = new api_1.Keyring({ type: 'ed25519' });
    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });
    const { signature } = registry
        .createType('ExtrinsicPayload', signingPayload, {
        version: 4,
    })
        .sign(alice);
    return signature;
}
exports.signWithAlice = signWithAlice;
//# sourceMappingURL=signWithAlice.js.map