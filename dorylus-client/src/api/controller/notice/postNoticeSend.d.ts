import { type AgentRoutersNoticeRouterNoticeModel } from "../../interface";
/**
 * Send Notice
 * /notice/send
 */
export declare function postNoticeSend(input: AgentRoutersNoticeRouterNoticeModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: boolean;
}, any>>;
