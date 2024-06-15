import { type LotteryRequestModel } from "../../interface";
/**
 * 添加修改抽奖
 * /lottery/upsert_lottery
 */
export declare function postLotteryUpsertLottery(input: LotteryRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
