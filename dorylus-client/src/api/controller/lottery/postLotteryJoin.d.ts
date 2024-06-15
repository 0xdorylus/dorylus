import { type LotteryJoinModel } from "../../interface";
/**
 * Join
 * /lottery/join
 */
export declare function postLotteryJoin(input: LotteryJoinModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
