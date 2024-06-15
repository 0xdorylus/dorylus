import { type IdModel } from "../../interface";
/**
 * 同意加入群申请
 * /social/accept_join_group_request
 */
export declare function postSocialAcceptJoinGroupRequest(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
