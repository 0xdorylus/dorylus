/**
 * View Prompt
 * /admin/prompt/view
 */
export declare function postAdminPromptView(params: PostAdminPromptViewParams): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        _id: string;
        name: string;
        name_zh: unknown;
        prompt: string;
        uid: unknown;
        tag: unknown;
        model: unknown;
        description: unknown;
        icon: unknown;
        org: unknown;
        created_at: string;
        updated_at: string;
    };
}, any>>;
interface PostAdminPromptViewParams {
    id: string;
}
export {};
