**[@axia-core/txwrapper-core](../README.md)**

> [Globals](../globals.md) / "txwrapper-axia-core/src/methods/proxy/proxy"

# Module: "txwrapper-axia-core/src/methods/proxy/proxy"

## Index

### Interfaces

* [ProxyProxy](../interfaces/_txwrapper_axia_core_src_methods_proxy_proxy_.proxyproxy.md)

### Functions

* [proxy](_txwrapper_axia_core_src_methods_proxy_proxy_.md#proxy)

## Functions

### proxy

▸ **proxy**(`args`: [ProxyProxy](../interfaces/_txwrapper_axia_core_src_methods_proxy_proxy_.proxyproxy.md), `info`: [BaseTxInfo](../interfaces/_txwrapper_core_src_types_method_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md)

*Defined in [packages/txwrapper-axia-core/src/methods/proxy/proxy.ts:33](https://github.com/axia-core/txwrapper-core/blob/731a943/packages/txwrapper-axia-core/src/methods/proxy/proxy.ts#L33)*

Dispatch the given `call` from an account for which the sender is authorized.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyProxy](../interfaces/_txwrapper_axia_core_src_methods_proxy_proxy_.proxyproxy.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_txwrapper_core_src_types_method_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md)
