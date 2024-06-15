import { type IdModel } from "../../interface";
/**
 * 文件列表
 * /channel_files
 */
export declare function postChannelFiles(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
