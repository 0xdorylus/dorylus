import { type VerifyEmailModel } from "../../interface";
/**
 * 验证emai地址(邀请登录)
 * /auth/account/verify_email
 */
export declare function postAuthAccountVerifyEmail(input: VerifyEmailModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
