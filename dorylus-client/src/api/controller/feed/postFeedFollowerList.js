import request from "@/utils/request.ts";
/**
 * follower_list
 * /feed/follower_list
 */
export function postFeedFollowerList(input) {
    return request.post(`/feed/follower_list`, input);
}
