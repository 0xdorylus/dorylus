import request from "@/utils/request.ts";
/**
 * Unsubscribe Tool
 * /role/unsubscribe_tool
 */
export function postRoleUnsubscribeTool(params) {
    const paramsInput = {
        assistant_id: params.assistant_id,
        tool_id: params.tool_id,
    };
    return request.post(`/role/unsubscribe_tool`, null, {
        params: paramsInput,
    });
}
