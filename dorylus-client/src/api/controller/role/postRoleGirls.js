import request from "@/utils/request.ts";
/**
 * Girl List
 * /role/girls
 */
export function postRoleGirls(input) {
    return request.post(`/role/girls`, input);
}
