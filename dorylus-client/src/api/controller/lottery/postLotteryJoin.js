import request from "@/utils/request.ts";
/**
 * Join
 * /lottery/join
 */
export function postLotteryJoin(input) {
    return request.post(`/lottery/join`, input);
}
