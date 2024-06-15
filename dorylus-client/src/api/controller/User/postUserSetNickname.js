import request from "@/utils/request.ts";
/**
 * 设置昵称？
 * /user/set_nickname
 */
export function postUserSetNickname(input) {
    return request.post(`/user/set_nickname`, input);
}
