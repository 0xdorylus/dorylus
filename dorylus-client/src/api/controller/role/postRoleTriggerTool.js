import request from "@/utils/request.ts";
/**
 * Trigger Tool
 * /role/trigger_tool
 */
export function postRoleTriggerTool(params) {
    const paramsInput = {
        assistant_id: params.assistant_id,
        tool_id: params.tool_id,
    };
    return request.post(`/role/trigger_tool`, null, {
        params: paramsInput,
    });
}
