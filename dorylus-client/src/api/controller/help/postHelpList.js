import request from "@/utils/request.ts";
/**
 * List Feedback
 * /help/list
 */
export function postHelpList(input) {
    return request.post(`/help/list`, input);
}
