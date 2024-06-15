import request from "@/utils/request.ts";
/**
 * List Joined Users
 * /lottery/list_joined_users
 */
export function postLotteryListJoinedUsers(input) {
    return request.post(`/lottery/list_joined_users`, input);
}
