import { type AgentMainNoticeModel } from "../../interface";
/**
 * 是否在线
 * /try_send_notice
 */
export declare function postTrySendNotice(input: AgentMainNoticeModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
