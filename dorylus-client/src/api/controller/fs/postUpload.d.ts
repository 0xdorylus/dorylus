import { type BodyCreateUploadFileUploadPost } from "../../interface";
/**
 * 上传文件
 * /upload
 */
export declare function postUpload(input: BodyCreateUploadFileUploadPost): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        url: string;
        size: number;
        filename: string;
        content_type: string;
    };
}, any>>;
