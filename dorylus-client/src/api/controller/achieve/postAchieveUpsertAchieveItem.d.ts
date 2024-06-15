import { type AchievementItem } from "../../interface";
/**
 * 初始化系统的成就配置
 * /achieve/upsert_achieve_item
 */
export declare function postAchieveUpsertAchieveItem(input: AchievementItem): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        tag: string;
        logo: string;
        name: string;
        logo2: string;
        nft_id: string;
        contract: string;
        chain: string;
        intro: string;
        limit_num: number;
    };
}, any>>;
