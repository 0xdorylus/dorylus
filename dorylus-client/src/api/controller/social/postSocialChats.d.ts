/**
 * 会话列表
 * /social/chats
 */
export declare function postSocialChats(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        uid: string;
        target: string;
        channel_id: string;
        type: string;
        message: string;
        new_message_num: number;
        avatar: string;
        status: number;
        nickname: string;
        name: unknown;
        closeness: number;
        is_lock: boolean;
        background: string;
        update_at: number;
    }[];
}, any>>;
