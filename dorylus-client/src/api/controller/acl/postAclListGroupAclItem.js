import request from "@/utils/request.ts";
/**
 * 群权限列表
 * /acl/list_group_acl_item
 */
export function postAclListGroupAclItem(input) {
    return request.post(`/acl/list_group_acl_item`, input);
}
