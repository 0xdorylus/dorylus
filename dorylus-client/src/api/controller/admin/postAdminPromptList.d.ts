import { type PageRequestModel } from "../../interface";
/**
 * List Prompt
 * /admin/prompt/list
 */
export declare function postAdminPromptList(input: PageRequestModel): Promise<import("axios").AxiosResponse<{
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
    }[];
}, any>>;
