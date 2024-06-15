import request from "@/utils/request.ts";
/**
 * 设置头像？
 * /user/set_avatar
 */
export function postUserSetAvatar(input) {
    return request.post(`/user/set_avatar`, input);
}
