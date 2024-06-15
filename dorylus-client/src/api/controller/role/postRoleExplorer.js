import request from "@/utils/request.ts";
/**
 * 浏览角色市场
 * /role/explorer
 */
export function postRoleExplorer(input) {
    return request.post(`/role/explorer`, input);
}
