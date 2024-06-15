import { type AgentRoutersSocialRouterInviteModel } from "../../interface";
/**
 * 加入群聊
 * /social/invite_to_group
 */
export declare function postSocialInviteToGroup(input: AgentRoutersSocialRouterInviteModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
