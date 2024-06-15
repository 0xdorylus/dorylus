import request from "@/utils/request.ts";
/**
 * View Prompt
 * /admin/prompt/view
 */
export function postAdminPromptView(params) {
    const paramsInput = {
        id: params.id,
    };
    return request.post(`/admin/prompt/view`, null, {
        params: paramsInput,
    });
}
