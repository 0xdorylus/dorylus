import { type UserInfoModel } from "../../interface";
export interface AssistantDetailModel {
    id: string;
    name: string;
    uid?: string;
    avatar?: string;
    greeting?: string;
    creator?: UserInfoModel;
    user_tags?: string[];
    tags?: string[];
    subscribed_num?: number;
    tag_ids?: string[];
    chat_num?: number;
    share_num?: number;
    intro?: string;
    banner?: string;
    background?: string;
    preview_list?: string[];
    description?: string;
    prompt?: string;
    main_model?: string;
    language?: string;
    temperature?: number;
    current_user_subscribed?: boolean;
    current_user_subscribed_channel_id?: string;
}
