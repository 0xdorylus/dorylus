import request from "@/utils/request.ts";
/**
 * Subscribe Tool
 * /role/subscribe_tool
 */
export function postRoleSubscribeTool(params) {
    const paramsInput = {
        assistant_id: params.assistant_id,
        tool_id: params.tool_id,
    };
    return request.post(`/role/subscribe_tool`, null, {
        params: paramsInput,
    });
}
