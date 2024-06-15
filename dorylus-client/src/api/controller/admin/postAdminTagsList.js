import request from "@/utils/request.ts";
/**
 * List Tags
 * /admin/tags/list
 */
export function postAdminTagsList(input) {
    return request.post(`/admin/tags/list`, input);
}
