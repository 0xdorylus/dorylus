export interface ChatGroupMessageModel {
    id: string;
    sender: string;
    content: unknown;
    channel_id: string;
    kind?: unknown;
    create_at: number;
}
