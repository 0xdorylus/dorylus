import { type IdModel } from "../../interface";
/**
 * 退出群聊
 * /social/quit_group
 */
export declare function postSocialQuitGroup(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
