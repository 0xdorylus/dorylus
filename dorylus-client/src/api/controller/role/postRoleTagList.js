import request from "@/utils/request.ts";
/**
 * 系统tag分类列表
 * /role/tag_list
 */
export function postRoleTagList() {
    return request.post(`/role/tag_list`);
}
