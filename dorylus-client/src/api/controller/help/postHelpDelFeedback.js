import request from "@/utils/request.ts";
/**
 * Del Feedback
 * /help/del_feedback
 */
export function postHelpDelFeedback(input) {
    return request.post(`/help/del_feedback`, input);
}
