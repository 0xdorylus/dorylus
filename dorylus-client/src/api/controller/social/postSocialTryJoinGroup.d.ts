import { type IdModel } from "../../interface";
/**
 * 尝试加入群聊
 * /social/try_join_group
 */
export declare function postSocialTryJoinGroup(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
