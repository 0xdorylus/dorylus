import { type StakeModel } from "../../interface";
/**
 * 取消质押
 * /asset/unstake
 */
export declare function postAssetUnstake(input: StakeModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
