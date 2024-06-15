import { type PageRequestModel } from "../../interface";
/**
 * List Tags
 * /admin/tags/list
 */
export declare function postAdminTagsList(input: PageRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        _id: string;
        title: string;
        value: string;
        tag: string;
        num: number;
    }[];
}, any>>;
