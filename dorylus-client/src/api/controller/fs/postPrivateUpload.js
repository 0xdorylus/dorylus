import request from "@/utils/request.ts";
/**
 * 上传私有文件
 * /private_upload
 */
export function postPrivateUpload(input) {
    return request.post(`/private_upload`, input);
}
