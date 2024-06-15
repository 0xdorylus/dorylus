import request from "@/utils/request.ts";
/**
 * 是否在线
 * /try_send_notice
 */
export function postTrySendNotice(input) {
    return request.post(`/try_send_notice`, input);
}
