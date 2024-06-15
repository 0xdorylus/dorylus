/**
 * 用户名可用吗,用户名注册用
 * /user/username_available
 */
export declare function getUserUsernameAvailable(params: GetUserUsernameAvailableParams): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: boolean;
}, any>>;
interface GetUserUsernameAvailableParams {
    username: string;
}
export {};
