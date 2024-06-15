import { type IdModel } from "../../interface";
/**
 * 获得群邀请链接
 * /social/get_group_join_link
 */
export declare function postSocialGetGroupJoinLink(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: string;
}, any>>;
