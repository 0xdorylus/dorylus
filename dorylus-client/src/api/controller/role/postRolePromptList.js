import request from "@/utils/request.ts";
/**
 * List Prompt
 * /role/prompt_list
 */
export function postRolePromptList(input) {
    return request.post(`/role/prompt_list`, input);
}
