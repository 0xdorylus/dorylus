/**
 * View Tag
 * /admin/tags/view
 */
export declare function postAdminTagsView(params: PostAdminTagsViewParams): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        _id: string;
        title: string;
        value: string;
        tag: string;
        num: number;
    };
}, any>>;
interface PostAdminTagsViewParams {
    id: string;
}
export {};
