import request from "@/utils/request.ts";
/**
 * Send Notice
 * /notice/send
 */
export function postNoticeSend(input) {
    return request.post(`/notice/send`, input);
}
