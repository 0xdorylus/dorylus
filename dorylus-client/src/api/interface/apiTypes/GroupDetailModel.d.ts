import { type UserInfoModel } from "../../interface";
export interface GroupDetailModel {
    id: string;
    name: string;
    intro: string;
    logo?: string;
    user_ids?: string[];
    assistant_ids?: string[];
    admin_ids?: string[];
    creator?: UserInfoModel;
    type?: string;
    category?: string;
    create_agent?: boolean;
}
