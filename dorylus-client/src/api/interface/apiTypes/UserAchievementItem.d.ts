export interface UserAchievementItem {
    id: string;
    uid: string;
    /** 用户成就分类 */
    tag?: string;
    logo: string;
    name?: string;
    logo2?: string;
    nft_id: string;
    contract: string;
    chain: string;
    intro: string;
    limit_num: number;
    user_num: number;
}
