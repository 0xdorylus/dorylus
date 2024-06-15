import { type BizUserModel } from "../../interface";
/**
 * Biz User Create
 * /admin/business/create
 */
export declare function postAdminBusinessCreate(input: BizUserModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        uid: string;
        token: string;
        username: string;
        avatar: string;
        acl: string[];
    };
}, any>>;
