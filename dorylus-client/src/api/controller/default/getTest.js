import request from "@/utils/request.ts";
/**
 * Test
 * /test
 */
export function getTest() {
    return request.get(`/test`);
}
