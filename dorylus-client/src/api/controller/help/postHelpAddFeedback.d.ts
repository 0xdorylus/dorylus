import { type FeedbackRequestModel } from "../../interface";
/**
 * Add Feedback
 * /help/add_feedback
 */
export declare function postHelpAddFeedback(input: FeedbackRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
