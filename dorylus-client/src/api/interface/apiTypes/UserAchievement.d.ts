export interface UserAchievement {
    _id?: string;
    /** 用户成就分类 */
    tag?: string;
    logo?: string;
    /** name */
    name?: string;
    /** Logo2 */
    logo2?: string;
    nft_id?: string;
    contract?: string;
    chain?: string;
    intro?: string;
    /** 用户成就门槛，比如是交谈10次 */
    limit_num?: number;
    create_at?: string;
    update_at?: string;
    uid: string;
    achieve_id: string;
    num?: number;
}
