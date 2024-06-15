import request from "@/utils/request.ts";
/**
 * 给频道增加文件
 * /add_channel_file
 */
export function postAddChannelFile(input) {
    return request.post(`/add_channel_file`, input);
}
