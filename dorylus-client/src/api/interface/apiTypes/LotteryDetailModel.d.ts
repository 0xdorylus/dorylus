export interface LotteryDetailModel {
    id: string;
    title: string;
    num: number;
    code: string;
    status: string;
    is_admin?: boolean;
    create_at: string;
}
