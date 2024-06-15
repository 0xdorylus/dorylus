import request from "@/utils/request.ts";
/**
 * 发送推文
 * /send
 */
export function postSend(input) {
    return request.post(`/send`, input);
}
