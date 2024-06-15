import request from "@/utils/request.ts";
/**
 * 发送推文
 * /feed/tweet
 */
export function postFeedTweet(input) {
    return request.post(`/feed/tweet`, input);
}
