/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/**
 * @ignore
 */ /** */
import { createTypeUnsafe, TypeRegistry } from '@axia-js/types';
import { Compact } from '@axia-js/types';
import { AbstractInt } from '@axia-js/types/codec/AbstractInt';
import { Call } from '@axia-js/types/interfaces';
import { Codec } from '@axia-js/types/types';
import { BN, stringCamelCase } from '@axia-js/util';

import { Args, TxMethod } from '../../types/method';

/**
 * From a AXIAJs `Call` type, get a serializable object representing the
 * call. All integers are serialized to base 10 strings in order to be safe.
 *
 * @param registry - The type registry
 * @param method - The method to serialize
 */
export function toTxMethod(registry: TypeRegistry, method: Call): TxMethod {
	// Mapping of argName->argType
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const argsDef = JSON.parse(method.Type.args as unknown as string);
	// Mapping of argName->argValue
	const args = Object.keys(argsDef).reduce((accumulator, key, index) => {
		let codec: unknown = createTypeUnsafe(registry, argsDef[key], [
			method.args[index],
		]);

		if (codec instanceof Compact) {
			// Unwrap the compact so we can check the interior type
			codec = codec.unwrap() as Codec;
		}

		// Forcibly serialize all integers to strings
		const jsonArg =
			codec instanceof AbstractInt
				? codec.toString(10)
				: (codec as BN).toJSON();

		accumulator[stringCamelCase(key)] = jsonArg;
		return accumulator;
	}, {} as Args);

	return {
		args,
		name: method.method,
		pallet: method.section,
	};
}
