**[@axia-core/txwrapper-core](../README.md)**

> [Globals](../globals.md) / ["txwrapper-axia-core/src/methods/proxy/addProxy"](../modules/_txwrapper_axia_core_src_methods_proxy_addproxy_.md) / ProxyAddProxy

# Interface: ProxyAddProxy

## Hierarchy

* {}

  ↳ **ProxyAddProxy**

## Index

### Properties

* [delay](_txwrapper_axia_core_src_methods_proxy_addproxy_.proxyaddproxy.md#delay)
* [delegate](_txwrapper_axia_core_src_methods_proxy_addproxy_.proxyaddproxy.md#delegate)
* [proxyType](_txwrapper_axia_core_src_methods_proxy_addproxy_.proxyaddproxy.md#proxytype)

## Properties

### delay

•  **delay**: number \| string

*Defined in [packages/txwrapper-axia-core/src/methods/proxy/addProxy.ts:22](https://github.com/axia-core/txwrapper-core/blob/731a943/packages/txwrapper-axia-core/src/methods/proxy/addProxy.ts#L22)*

The number of blocks that an announcement must be in place for before the corresponding call
may be dispatched. If zero, then no announcement is needed.

___

### delegate

•  **delegate**: string

*Defined in [packages/txwrapper-axia-core/src/methods/proxy/addProxy.ts:13](https://github.com/axia-core/txwrapper-core/blob/731a943/packages/txwrapper-axia-core/src/methods/proxy/addProxy.ts#L13)*

The account that the `caller` would like to make a proxy.

___

### proxyType

•  **proxyType**: string

*Defined in [packages/txwrapper-axia-core/src/methods/proxy/addProxy.ts:17](https://github.com/axia-core/txwrapper-core/blob/731a943/packages/txwrapper-axia-core/src/methods/proxy/addProxy.ts#L17)*

The permissions for this proxy account. See the chain's runtime for the `call` filters.
