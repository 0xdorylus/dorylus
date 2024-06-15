import request from "@/utils/request.ts";
/**
 * Biz Login
 * /admin/business/login
 */
export function postAdminBusinessLogin(input) {
    return request.post(`/admin/business/login`, input);
}
