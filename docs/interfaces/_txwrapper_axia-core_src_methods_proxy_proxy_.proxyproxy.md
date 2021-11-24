**[@axia-core/txwrapper-core](../README.md)**

> [Globals](../globals.md) / ["txwrapper-axia-core/src/methods/proxy/proxy"](../modules/_txwrapper_axia_core_src_methods_proxy_proxy_.md) / ProxyProxy

# Interface: ProxyProxy

## Hierarchy

* {}

  ↳ **ProxyProxy**

## Index

### Properties

* [call](_txwrapper_axia_core_src_methods_proxy_proxy_.proxyproxy.md#call)
* [forceProxyType](_txwrapper_axia_core_src_methods_proxy_proxy_.proxyproxy.md#forceproxytype)
* [real](_txwrapper_axia_core_src_methods_proxy_proxy_.proxyproxy.md#real)

## Properties

### call

•  **call**: { args?: undefined \| string ; callIndex?: undefined \| string  } \| string

*Defined in [packages/txwrapper-axia-core/src/methods/proxy/proxy.ts:23](https://github.com/axia-core/txwrapper-core/blob/731a943/packages/txwrapper-axia-core/src/methods/proxy/proxy.ts#L23)*

The call to be made by the `real` account.
To take advantage of txwrapper methods, this could be UnsignedTransaction.method.

___

### forceProxyType

•  **forceProxyType**: string

*Defined in [packages/txwrapper-axia-core/src/methods/proxy/proxy.ts:18](https://github.com/axia-core/txwrapper-core/blob/731a943/packages/txwrapper-axia-core/src/methods/proxy/proxy.ts#L18)*

Specify the exact proxy type to be used and checked for this call.

___

### real

•  **real**: string

*Defined in [packages/txwrapper-axia-core/src/methods/proxy/proxy.ts:14](https://github.com/axia-core/txwrapper-core/blob/731a943/packages/txwrapper-axia-core/src/methods/proxy/proxy.ts#L14)*

Dispatch the given `call` from an account that the sender is authorized for
through, `add_proxy`.
