import request from "@/utils/request.ts";
/**
 * 将对话委托给我创建的AI角色(dev)
 * /user/delegate
 */
export function postUserDelegate(input) {
    return request.post(`/user/delegate`, input);
}
