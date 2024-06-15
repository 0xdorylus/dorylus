import { type SearchModel } from "../../interface";
/**
 * 搜索用户
 * /social/search_user
 */
export declare function postSocialSearchUser(input: SearchModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        username: string;
        intro: string;
        avatar: string;
        verified: boolean;
        nickname: string;
        user_type: string;
    }[];
}, any>>;
