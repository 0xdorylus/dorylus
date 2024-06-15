/**
 * 我订阅的AI列表
 * /user/my_subscribed_assistant_list
 */
export declare function getUserMySubscribedAssistantList(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        name: string;
        uid: string;
        avatar: string;
        greeting: string;
        creator: {
            id: string;
            username: string;
            intro: string;
            avatar: string;
            verified: boolean;
            nickname: string;
            user_type: string;
        };
        user_tags: string[];
        tags: string[];
        subscribed_num: number;
        tag_ids: string[];
        chat_num: number;
        share_num: number;
        intro: string;
        banner: string;
        background: string;
        preview_list: string[];
        description: string;
        prompt: string;
        main_model: string;
        language: string;
        temperature: number;
        current_user_subscribed: boolean;
        current_user_subscribed_channel_id: string;
    }[];
}, any>>;
