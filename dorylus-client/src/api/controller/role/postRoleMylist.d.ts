import { type AssistantListRequestModel } from "../../interface";
/**
 * My Role List
 * /role/mylist
 */
export declare function postRoleMylist(input: AssistantListRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        total: number;
        total_page: number;
        list: {
            id: string;
            uid: string;
            name: string;
            avatar: string;
            greeting: string;
            intro: string;
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
            tag_ids: string[];
            chat_num: number;
            share_num: number;
            share_link: string;
            subscribed_num: number;
        }[];
    };
}, any>>;
