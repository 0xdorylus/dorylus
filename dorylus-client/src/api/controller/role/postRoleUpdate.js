import request from "@/utils/request.ts";
/**
 * 设置角色
 * /role/update
 */
export function postRoleUpdate(input) {
    return request.post(`/role/update`, input);
}
