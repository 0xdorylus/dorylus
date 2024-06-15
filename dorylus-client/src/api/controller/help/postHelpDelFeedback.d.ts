import { type FeedbackIdModel } from "../../interface";
/**
 * Del Feedback
 * /help/del_feedback
 */
export declare function postHelpDelFeedback(input: FeedbackIdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
