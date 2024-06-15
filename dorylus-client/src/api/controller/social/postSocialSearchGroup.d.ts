import { type SearchModel } from "../../interface";
/**
 * 搜索群
 * /social/search_group
 */
export declare function postSocialSearchGroup(input: SearchModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        uid: string;
        user_ids: string[];
        type: string;
        category: unknown;
        name: string;
        intro: string;
        logo: string;
        banner: string;
        admin_ids: string[];
        tag_ids: string[];
        link: string;
        join_channel_link: string;
        user_in_channel: boolean;
        is_admin: boolean;
        target: string;
        memo: string;
    }[];
}, any>>;
