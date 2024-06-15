import { type LotteryUserPageRequestModel } from "../../interface";
/**
 * List Joined Users
 * /lottery/list_joined_users
 */
export declare function postLotteryListJoinedUsers(input: LotteryUserPageRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        page: number;
        total_page: number;
        list: {
            hit: number;
            uid: string;
            user: {
                id: string;
                username: string;
                intro: string;
                avatar: string;
                verified: boolean;
                nickname: string;
                user_type: string;
            };
        }[];
    };
}, any>>;
