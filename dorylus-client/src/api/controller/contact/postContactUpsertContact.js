import request from "@/utils/request.ts";
/**
 * 添加修改联系人
 * /contact/upsert_contact
 */
export function postContactUpsertContact(input) {
    return request.post(`/contact/upsert_contact`, input);
}
