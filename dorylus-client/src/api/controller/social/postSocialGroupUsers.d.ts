import { type IdModel } from "../../interface";
/**
 * 群用户
 * /social/group_users
 */
export declare function postSocialGroupUsers(input: IdModel): Promise<import("axios").AxiosResponse<{
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
