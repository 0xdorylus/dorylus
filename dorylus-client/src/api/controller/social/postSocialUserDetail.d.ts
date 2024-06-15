import { type IdModel } from "../../interface";
/**
 * user detail
 * /social/user_detail
 */
export declare function postSocialUserDetail(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
