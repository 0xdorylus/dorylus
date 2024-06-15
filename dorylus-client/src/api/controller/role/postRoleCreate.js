import request from "@/utils/request.ts";
/**
 * 创建角色
 * /role/create
 */
export function postRoleCreate(input) {
    return request.post(`/role/create`, input);
}
