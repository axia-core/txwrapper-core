<br /><br />

<h1 align="center">@axia-core/txwrapper-axia-core</h1>
<h4 align="center">Selected dispatchables of Substrate pallets, to be re-exported by chain specific txwrappers</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@axia-core/txwrapper-axia-core">
    <img alt="npm" src="https://img.shields.io/npm/v/@axia-core/txwrapper-axia-core.svg" />
  </a>
  <a href="https://github.com/axia-core/txwrapper-core/actions">
    <img alt="Github Actions" src="https://github.com/axia-core/txwrapper-core/workflows/pr/badge.svg" />
  </a>
  <a href="https://david-dm.org/axia-core/txwrapper-core">
    <img alt="david-dm" src="https://img.shields.io/david/axia-tech/txwrapper-core.svg" />
  </a>
</p>

<br /><br />

```bash
yarn add @axia-core/txwrapper-axia-core
```

In a JS/TS index file of package:

```typescript
import { methods as axia-coreMethods } from '@axia-core/txwrapper-axia-core';

// Export methods of axia-core pallets included in the chain's runtime.
export const methods = {
    balances: axia-coreMethods.balances,
    utility: axia-coreMethods.utility,
    proxy: axia-coreMethods.proxy,
  };
```

Have a look at the [txwrapper creation guide for chain builders](../../CHAIN_BUILDER.md) to see more guidance on how to use this package in a chain specific txwrapper.
