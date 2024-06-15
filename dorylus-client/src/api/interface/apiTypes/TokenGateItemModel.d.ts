export interface TokenGateItemModel {
    id?: string;
    channel_id: string;
    mainchain: string;
    token: string;
    contract: string;
    num: number;
    acl_type: string;
}
