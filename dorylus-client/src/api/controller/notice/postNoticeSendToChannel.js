import request from "@/utils/request.ts";
/**
 * Send To Channel
 * /notice/send_to_channel
 */
export function postNoticeSendToChannel(input) {
    return request.post(`/notice/send_to_channel`, input);
}
