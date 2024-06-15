import request from "@/utils/request.ts";
/**
 * 上传文件
 * /upload
 */
export function postUpload(input) {
    return request.post(`/upload`, input);
}
