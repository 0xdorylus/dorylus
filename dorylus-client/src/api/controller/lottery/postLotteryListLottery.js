import request from "@/utils/request.ts";
/**
 * List Lottery
 * /lottery/list_lottery
 */
export function postLotteryListLottery(input) {
    return request.post(`/lottery/list_lottery`, input);
}
