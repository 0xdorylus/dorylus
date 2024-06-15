/**
 * 用户充值地址
 * /asset/get_deposit_address
 */
export declare function postAssetGetDepositAddress(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: any;
}, any>>;
