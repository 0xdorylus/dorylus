import { type UserWithdrawModel } from "../../interface";
/**
 * 用户提现
 * /asset/withdraw
 */
export declare function postAssetWithdraw(input: UserWithdrawModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
