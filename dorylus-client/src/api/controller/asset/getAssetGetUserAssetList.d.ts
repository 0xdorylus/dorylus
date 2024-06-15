/**
 * 用户资产列表
 * /asset/get_user_asset_list
 */
export declare function getAssetGetUserAssetList(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        uid: string;
        mainchain: string;
        token: string;
        amount: string;
        frozen: string;
    }[];
}, any>>;
