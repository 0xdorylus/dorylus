import request from "@/utils/request.ts";
/**
 * Ping
 * /ping
 */
export function getPing() {
    return request.get(`/ping`);
}
