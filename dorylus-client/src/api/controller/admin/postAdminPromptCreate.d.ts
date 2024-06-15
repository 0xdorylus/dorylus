import { type SystemtPromptForm } from "../../interface";
/**
 * Create Prompt
 * /admin/prompt/create
 */
export declare function postAdminPromptCreate(input: SystemtPromptForm): Promise<import("axios").AxiosResponse<{
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
