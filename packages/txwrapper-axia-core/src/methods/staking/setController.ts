import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@axia-core/txwrapper-core';

export interface StakingSetControllerArgs extends Args {
	/**
	 * The SS-58 encoded controller address.
	 */
	controller: string;
}

/**
 * (Re-)set the controller of a stash. Comes into effect at the beginning of the next era.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function setController(
	args: StakingSetControllerArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'setController',
				pallet: 'staking',
			},
			...info,
		},
		options
	);
}
