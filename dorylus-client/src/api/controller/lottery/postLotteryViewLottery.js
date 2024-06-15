import request from "@/utils/request.ts";
/**
 * View Lottery
 * /lottery/view_lottery
 */
export function postLotteryViewLottery(input) {
    return request.post(`/lottery/view_lottery`, input);
}
