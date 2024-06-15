import request from "@/utils/request.ts";
/**
 * 联系人列表
 * /contact/list_contact_item
 */
export function postContactListContactItem(input) {
    return request.post(`/contact/list_contact_item`, input);
}
