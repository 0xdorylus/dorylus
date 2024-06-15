import request from "@/utils/request.ts";
/**
 * Create Prompt
 * /admin/prompt/create
 */
export function postAdminPromptCreate(input) {
    return request.post(`/admin/prompt/create`, input);
}
