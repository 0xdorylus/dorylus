import request from "@/utils/request.ts";
/**
 * 跟随某人
 * /feed/unfollow
 */
export function postFeedUnfollow(input) {
    return request.post(`/feed/unfollow`, input);
}
