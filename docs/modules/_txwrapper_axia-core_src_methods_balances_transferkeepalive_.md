**[@axia-core/txwrapper-core](../README.md)**

> [Globals](../globals.md) / "txwrapper-axia-core/src/methods/balances/transferKeepAlive"

# Module: "txwrapper-axia-core/src/methods/balances/transferKeepAlive"

## Index

### Type aliases

* [BalancesTransferKeepAliveArgs](_txwrapper_axia-core_src_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs)

### Functions

* [transferKeepAlive](_txwrapper_axia-core_src_methods_balances_transferkeepalive_.md#transferkeepalive)

## Type aliases

### BalancesTransferKeepAliveArgs

Ƭ  **BalancesTransferKeepAliveArgs**: [BalancesTransferArgs](../interfaces/_txwrapper_axia-core_src_methods_balances_transfer_.balancestransferargs.md)

*Defined in [packages/txwrapper-axia-core/src/methods/balances/transferKeepAlive.ts:10](https://github.com/axia-core/txwrapper-core/blob/731a943/packages/txwrapper-axia-core/src/methods/balances/transferKeepAlive.ts#L10)*

## Functions

### transferKeepAlive

▸ **transferKeepAlive**(`args`: [BalancesTransferKeepAliveArgs](_txwrapper_axia-core_src_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs), `info`: [BaseTxInfo](../interfaces/_txwrapper_core_src_types_method_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md)

*Defined in [packages/txwrapper-axia-core/src/methods/balances/transferKeepAlive.ts:19](https://github.com/axia-core/txwrapper-core/blob/731a943/packages/txwrapper-axia-core/src/methods/balances/transferKeepAlive.ts#L19)*

Construct a balance transfer transaction offline.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [BalancesTransferKeepAliveArgs](_txwrapper_axia-core_src_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_txwrapper_core_src_types_method_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md)
