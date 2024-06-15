import request from "@/utils/request.ts";
/**
 * Biz User Create
 * /admin/business/create
 */
export function postAdminBusinessCreate(input) {
    return request.post(`/admin/business/create`, input);
}
