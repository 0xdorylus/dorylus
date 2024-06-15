import request from "@/utils/request.ts";
/**
 * 开启抽奖
 * /lottery/start_lucky_time
 */
export function postLotteryStartLuckyTime(input) {
    return request.post(`/lottery/start_lucky_time`, input);
}
