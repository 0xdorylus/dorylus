import request from "@/utils/request.ts";
/**
 * 获取父节点
 * /user/get_pid
 */
export function postUserGetPid() {
    return request.post(`/user/get_pid`);
}
