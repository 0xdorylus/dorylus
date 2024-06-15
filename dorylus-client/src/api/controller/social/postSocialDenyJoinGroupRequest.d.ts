import { type IdModel } from "../../interface";
/**
 * 拒绝加入群申请
 * /social/deny_join_group_request
 */
export declare function postSocialDenyJoinGroupRequest(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
