export interface CreateAssistantModel {
    name: string;
    avatar?: string;
    intro?: string;
    user_tags?: string[];
    tag_ids?: string[];
}
