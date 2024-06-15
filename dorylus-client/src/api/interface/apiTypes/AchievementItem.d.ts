export interface AchievementItem {
    /** 成就ID，为空新增，不为空修改 */
    id?: string;
    /** 成就分类，比如POA */
    tag?: string;
    /** Logo */
    logo?: string;
    /** name */
    name?: string;
    /** Logo2 */
    logo2?: string;
    /** NFT的ID */
    nft_id?: string;
    /** 合约地址 */
    contract?: string;
    /** 所属链 */
    chain?: string;
    /** 成就说明 */
    intro?: string;
    /** 用户成就门槛，比如是交谈10次 */
    limit_num?: number;
}
