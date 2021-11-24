<br /><br />

<h1 align="center">@axia-core/txwrapper-core</h1>
<h4 align="center">Core components for creating a txwrapper lib.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@axia-core/txwrapper-orml">
    <img alt="npm" src="https://img.shields.io/npm/v/@axia-core/txwrapper-core.svg" />
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
yarn add @axia-core/txwrapper-core
```

In a JS/TS index file of package:

```typescript
import { methods as ORMLMethods } from '@axia-core/txwrapper-orml';

// Export methods of pallets included in the chain's runtime.
export const methods = {
	currencies: ORMLMethods.currencies,
};
```

Have a look at the [txwrapper creation guide for chain builders](../../CHAIN_BUILDER.md) to see more guidance on how to use this package to build a chain specific txwrapper.
