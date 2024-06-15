import request from "@/utils/request.ts";
/**
 * Download File
 * /download/{file_id}
 */
export function getDownloadByFileId(params) {
    const paramsInput = {
        summary: params.summary,
    };
    return request.get(`/download/${params.file_id}`, {
        params: paramsInput,
    });
}
