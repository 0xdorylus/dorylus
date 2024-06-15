import request from "@/utils/request.ts";
/**
 * new_follower_list
 * /feed/new_follower_list
 */
export function postFeedNewFollowerList(input) {
    return request.post(`/feed/new_follower_list`, input);
}
