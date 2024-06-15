/**
 * 获取支持的Token
 * /asset/get_supported_asset_list
 */
export declare function getAssetGetSupportedAssetList(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: string[];
}, any>>;
