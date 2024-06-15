/**
 * 设置昵称？
 * /user/detail
 */
export declare function postUserDetail(params: PostUserDetailParams): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
interface PostUserDetailParams {
    id: string;
}
export {};
