import request from "@/utils/request.ts";
/**
 * 注册用户
 * /app/register_user
 */
export function postAppRegisterUser(input) {
    return request.post(`/app/register_user`, input);
}
