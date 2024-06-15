import request from "@/utils/request.ts";
/**
 * 更新资料，为空忽略
 * /user/update_profile
 */
export function postUserUpdateProfile(input) {
    return request.post(`/user/update_profile`, input);
}
