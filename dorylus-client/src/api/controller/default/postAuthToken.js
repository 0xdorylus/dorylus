import request from "@/utils/request.ts";
/**
 * Login
 * /auth/token
 */
export function postAuthToken(input) {
    return request.post(`/auth/token`, input);
}
