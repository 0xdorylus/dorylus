/**
 * 投资列表
 * /asset/get_invest_list
 */
export declare function postAssetGetInvestList(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown[];
}, any>>;
