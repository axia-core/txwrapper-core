<br /><br />

<h1 align="center">@axia-core/txwrapper-registry</h1>
<h4 align="center">Registry creation support, catering to chains with types in [@axia-js/apps-config](https://github.com/axia-js/apps/tree/master/packages/apps-config/README.md)</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@axia-core/txwrapper-registry">
    <img alt="npm" src="https://img.shields.io/npm/v/@axia-core/txwrapper-registry.svg" />
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
yarn add @axia-core/txwrapper-registry
```

In a JS/TS index file of package:

```typescript
import { getRegistry } from '@axia-core/txwrapper-registry';

  // Create AXIA's type registry.
  const registry = getRegistry({
    chainName: 'AXIA',
    specName: 'axia',
    specVersion: 26,
    metadataRpc,
  });
```

Have a look at the [examples](/packages/txwrapper-examples/README.md) to see how `getRegistry` is used in the whole lifecycle of a transaction, from generation to signing to broadcast.
