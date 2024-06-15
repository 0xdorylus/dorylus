import request from "@/utils/request.ts";
/**
 * Create
 * /admin/tags/create
 */
export function postAdminTagsCreate(input) {
    return request.post(`/admin/tags/create`, input);
}
