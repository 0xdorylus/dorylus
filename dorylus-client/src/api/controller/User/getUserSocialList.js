import request from "@/utils/request.ts";
/**
 * 获取个人社交链接
 * /user/social_list
 */
export function getUserSocialList() {
    return request.get(`/user/social_list`);
}
