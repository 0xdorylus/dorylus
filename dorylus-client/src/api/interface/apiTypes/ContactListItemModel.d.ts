export interface ContactListItemModel {
    id: string;
    username: string;
    channel_id: string;
    receiver: string;
    memo?: string;
    avatar: string;
    user?: any;
    /** 类型,group:群,p2p：人和人,p2m ：人和机器 */
    type?: string;
}
