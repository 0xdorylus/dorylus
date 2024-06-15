import request from "@/utils/request.ts";
/**
 * 跟随某人
 * /feed/follow
 */
export function postFeedFollow(input) {
    return request.post(`/feed/follow`, input);
}
