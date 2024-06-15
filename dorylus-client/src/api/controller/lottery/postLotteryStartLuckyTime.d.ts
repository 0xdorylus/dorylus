import { type IdModel } from "../../interface";
/**
 * 开启抽奖
 * /lottery/start_lucky_time
 */
export declare function postLotteryStartLuckyTime(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
