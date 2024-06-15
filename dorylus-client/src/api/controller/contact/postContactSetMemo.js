import request from "@/utils/request.ts";
/**
 * 添加修改联系人
 * /contact/set_memo
 */
export function postContactSetMemo(input) {
    return request.post(`/contact/set_memo`, input);
}
