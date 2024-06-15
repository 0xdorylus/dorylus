import { type TweetRequestModel } from "../../interface";
/**
 * 发送推文
 * /feed/tweet
 */
export declare function postFeedTweet(input: TweetRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
