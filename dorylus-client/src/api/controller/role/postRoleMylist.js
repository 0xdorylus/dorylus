import request from "@/utils/request.ts";
/**
 * My Role List
 * /role/mylist
 */
export function postRoleMylist(input) {
    return request.post(`/role/mylist`, input);
}
