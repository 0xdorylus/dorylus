/**
 * List Tool
 * /tool/list
 */
export declare function postToolList(params: PostToolListParams): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
interface PostToolListParams {
    page?: number;
}
export {};
