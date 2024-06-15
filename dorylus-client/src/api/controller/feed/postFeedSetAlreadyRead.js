import request from "@/utils/request.ts";
/**
 * 设置已读
 * /feed/set_already_read_
 */
export function postFeedSetAlreadyRead(input) {
    return request.post(`/feed/set_already_read_`, input);
}
