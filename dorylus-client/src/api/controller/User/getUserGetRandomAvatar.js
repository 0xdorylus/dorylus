import request from "@/utils/request.ts";
/**
 * 获取随机头像
 * /user/get_random_avatar
 */
export function getUserGetRandomAvatar() {
    return request.get(`/user/get_random_avatar`);
}
