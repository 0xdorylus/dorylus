import request from "@/utils/request.ts";
/**
 * View Tag
 * /admin/tags/view
 */
export function postAdminTagsView(params) {
    const paramsInput = {
        id: params.id,
    };
    return request.post(`/admin/tags/view`, null, {
        params: paramsInput,
    });
}
