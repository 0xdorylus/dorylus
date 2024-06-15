/**
 * Subscribe Tool
 * /role/subscribe_tool
 */
export declare function postRoleSubscribeTool(params: PostRoleSubscribeToolParams): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
interface PostRoleSubscribeToolParams {
    assistant_id: string;
    tool_id: string;
}
export {};
