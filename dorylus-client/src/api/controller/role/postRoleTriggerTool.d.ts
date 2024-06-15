/**
 * Trigger Tool
 * /role/trigger_tool
 */
export declare function postRoleTriggerTool(params: PostRoleTriggerToolParams): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
interface PostRoleTriggerToolParams {
    assistant_id: string;
    tool_id: string;
}
export {};
