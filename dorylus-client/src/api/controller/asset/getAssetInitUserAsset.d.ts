/**
 * 初始化用户资产
 * /asset/init_user_asset
 */
export declare function getAssetInitUserAsset(): Promise<import("axios").AxiosResponse<{
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
