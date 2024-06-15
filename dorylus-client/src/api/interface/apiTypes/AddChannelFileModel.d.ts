export interface AddChannelFileModel {
    channel_id: string;
    filename: string;
    url: string;
    size: number;
    uid?: unknown;
    content_type?: string;
}
