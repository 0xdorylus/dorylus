/**
 * Unsubscribe Tool
 * /role/unsubscribe_tool
 */
export declare function postRoleUnsubscribeTool(params: PostRoleUnsubscribeToolParams): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
interface PostRoleUnsubscribeToolParams {
    assistant_id: string;
    tool_id: string;
}
export {};
