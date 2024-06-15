import request from "@/utils/request.ts";
/**
 * 文件列表
 * /channel_files
 */
export function postChannelFiles(input) {
    return request.post(`/channel_files`, input);
}
