import request from "@/utils/request.ts";
/**
 * 删除一条权限
 * /acl/del_group_acl_item
 */
export function postAclDelGroupAclItem(input) {
    return request.post(`/acl/del_group_acl_item`, input);
}
