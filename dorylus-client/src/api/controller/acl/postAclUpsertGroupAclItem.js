import request from "@/utils/request.ts";
/**
 * 配置群权限
 * /acl/upsert_group_acl_item
 */
export function postAclUpsertGroupAclItem(input) {
    return request.post(`/acl/upsert_group_acl_item`, input);
}
