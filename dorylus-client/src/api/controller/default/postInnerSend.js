import request from "@/utils/request.ts";
/**
 * 发送消息
 * /inner_send
 */
export function postInnerSend(input) {
    return request.post(`/inner_send`, input);
}
