/**
 * 退出登录
 * /auth/logout
 */
export declare function postAuthLogout(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
