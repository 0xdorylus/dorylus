import { type PageRequestModel } from "../../interface";
/**
 * List Feedback
 * /help/list
 */
export declare function postHelpList(input: PageRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        total: number;
        total_page: number;
        list: {
            id: string;
            email: string;
            content: string;
            create_at: string;
        }[];
    };
}, any>>;
