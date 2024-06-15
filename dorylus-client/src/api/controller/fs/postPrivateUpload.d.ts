import { type BodyPrivateUploadFilePrivateUploadPost } from "../../interface";
/**
 * 上传私有文件
 * /private_upload
 */
export declare function postPrivateUpload(input: BodyPrivateUploadFilePrivateUploadPost): Promise<import("axios").AxiosResponse<{
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
