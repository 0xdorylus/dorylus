import { type UserAchievementRequestItem } from "../../interface";
/**
 * 用户成就模拟
 * /achieve/upsert_user_achieve_item
 */
export declare function postAchieveUpsertUserAchieveItem(input: UserAchievementRequestItem): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        _id: string;
        tag: string;
        logo: string;
        name: string;
        logo2: string;
        nft_id: string;
        contract: string;
        chain: string;
        intro: string;
        limit_num: number;
        create_at: string;
        update_at: string;
        uid: string;
        achieve_id: string;
        num: number;
    };
}, any>>;
