export interface ChatDialogMessageModel {
    id: string;
    sender: string;
    receiver?: string;
    content: unknown;
    channel_id: string;
    ref_id?: string;
    kind?: string;
    is_user?: boolean;
    create_at: number;
}
