import request from "@/utils/request.ts";
/**
 * 给一个用户发送消息
 * /app/send
 */
export function postAppSend(input) {
    return request.post(`/app/send`, input);
}
