/**
 * 加入群聊
 * /social/list_join_group_request
 */
export declare function postSocialListJoinGroupRequest(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        uid: string;
        channel_id: string;
        memo: string;
    }[];
}, any>>;
