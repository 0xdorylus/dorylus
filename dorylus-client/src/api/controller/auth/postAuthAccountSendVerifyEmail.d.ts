/**
 * 发送email验证地址
 * /auth/account/send_verify_email
 */
export declare function postAuthAccountSendVerifyEmail(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
