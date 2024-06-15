import request from "@/utils/request.ts";
/**
 * 添加修改抽奖
 * /lottery/upsert_lottery
 */
export function postLotteryUpsertLottery(input) {
    return request.post(`/lottery/upsert_lottery`, input);
}
