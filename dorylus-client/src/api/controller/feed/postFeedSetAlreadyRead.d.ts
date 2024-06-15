import { type IdModel } from "../../interface";
/**
 * 设置已读
 * /feed/set_already_read_
 */
export declare function postFeedSetAlreadyRead(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
