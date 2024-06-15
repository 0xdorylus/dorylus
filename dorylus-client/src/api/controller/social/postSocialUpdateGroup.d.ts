import { type UpdateGroupModel } from "../../interface";
/**
 * 更新群
 * /social/update_group
 */
export declare function postSocialUpdateGroup(input: UpdateGroupModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        name: string;
        intro: string;
        logo: string;
        user_ids: string[];
        assistant_ids: string[];
        admin_ids: string[];
        creator: {
            id: string;
            username: string;
            intro: string;
            avatar: string;
            verified: boolean;
            nickname: string;
            user_type: string;
        };
        type: string;
        category: string;
        create_agent: boolean;
    };
}, any>>;
