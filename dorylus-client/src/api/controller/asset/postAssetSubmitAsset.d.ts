import { type SubmitModel } from "../../interface";
/**
 * 提交交易hash
 * /asset/submit_asset
 */
export declare function postAssetSubmitAsset(input: SubmitModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
