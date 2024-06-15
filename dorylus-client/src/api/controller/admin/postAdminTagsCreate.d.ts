import { type SystemtTagForm } from "../../interface";
/**
 * Create
 * /admin/tags/create
 */
export declare function postAdminTagsCreate(input: SystemtTagForm): Promise<import("axios").AxiosResponse<{
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
