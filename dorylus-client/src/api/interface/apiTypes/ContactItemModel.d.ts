export interface ContactItemModel {
    id?: string;
    /** 用户名 */
    username?: string;
    channel_id?: string;
    /** 对方的UID，AI机器人和点对点试用 */
    receiver?: string;
    /** 备注名 */
    memo?: string;
    avatar?: string;
}
