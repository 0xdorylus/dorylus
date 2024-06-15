import { type BizLoginModel } from "../../interface";
/**
 * Biz Login
 * /admin/business/login
 */
export declare function postAdminBusinessLogin(input: BizLoginModel): Promise<import("axios").AxiosResponse<{
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
