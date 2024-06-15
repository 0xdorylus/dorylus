export interface CreateGroupModel {
    name: string;
    intro: string;
    logo?: string;
    who_can_join?: string;
    user_ids?: string[];
    type?: string;
    category?: string;
    create_agent?: boolean;
}
