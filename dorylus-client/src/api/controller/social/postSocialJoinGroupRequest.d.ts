import { type JoinGroupRequestModel } from "../../interface";
/**
 * 加入群聊
 * /social/join_group_request
 */
export declare function postSocialJoinGroupRequest(input: JoinGroupRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
