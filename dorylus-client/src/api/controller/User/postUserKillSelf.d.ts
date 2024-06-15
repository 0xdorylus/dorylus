import { type CaptchaMode } from "../../interface";
/**
 * 删除自己的资料，让账号无效
 * /user/kill_self
 */
export declare function postUserKillSelf(input: CaptchaMode): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
