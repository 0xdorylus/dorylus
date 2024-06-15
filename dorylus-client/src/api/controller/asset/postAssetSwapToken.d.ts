import { type SwitchModel } from "../../interface";
/**
 * 提交交易hash
 * /asset/swap_token
 */
export declare function postAssetSwapToken(input: SwitchModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
