import request from "@/utils/request.ts";
/**
 * 用户名可用吗,用户名注册用
 * /user/username_available
 */
export function getUserUsernameAvailable(params) {
    const paramsInput = {
        username: params.username,
    };
    return request.get(`/user/username_available`, {
        params: paramsInput,
    });
}
