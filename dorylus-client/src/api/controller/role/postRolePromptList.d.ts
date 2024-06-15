import { type PageRequestModel } from "../../interface";
/**
 * List Prompt
 * /role/prompt_list
 */
export declare function postRolePromptList(input: PageRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        total: number;
        total_page: number;
        list: {
            name: string;
            prompt: string;
            tag: string;
            model: string;
            description: string;
            icon: string;
            org: string;
        }[];
    };
}, any>>;
