import request from "@/utils/request.ts";
/**
 * List Prompt
 * /admin/prompt/list
 */
export function postAdminPromptList(input) {
    return request.post(`/admin/prompt/list`, input);
}
