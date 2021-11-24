/**
 * JSON object of ChainProperties codec from `@axia-js/api`.
 */
export interface ChainProperties {
	ss58Format?: number | null;
	tokenDecimals?: number[] | null;
	tokenSymbol?: string[] | null;
}
