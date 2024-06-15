import request from "@/utils/request.ts";
/**
 * following_list
 * /feed/following_list
 */
export function postFeedFollowingList(input) {
    return request.post(`/feed/following_list`, input);
}
