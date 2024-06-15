import { type GroupListRequestModel } from "../../interface";
/**
 * 群列表
 * /social/groups
 */
export declare function postSocialGroups(input: GroupListRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        page: number;
        total_page: number;
        list: {
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
        }[];
    };
}, any>>;
