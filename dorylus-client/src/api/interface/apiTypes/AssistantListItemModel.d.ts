import { type UserInfoModel } from "../../interface";
export interface AssistantListItemModel {
    id: string;
    uid?: string;
    name: string;
    avatar?: string;
    greeting?: string;
    intro?: string;
    creator?: UserInfoModel;
    user_tags?: string[];
    tag_ids?: string[];
    chat_num?: number;
    share_num?: number;
    share_link?: string;
    subscribed_num?: number;
}
