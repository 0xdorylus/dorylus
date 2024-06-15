import request from "@/utils/request.ts";
/**
 * Add Feedback
 * /help/add_feedback
 */
export function postHelpAddFeedback(input) {
    return request.post(`/help/add_feedback`, input);
}
