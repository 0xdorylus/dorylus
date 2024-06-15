export interface AssistantModel {
    id: string;
    name?: string;
    avatar?: string;
    greeting?: string;
    language?: string;
    temperature?: number;
    visiablity?: number;
    free_talk_num?: number;
    prompt?: string;
    system_prompt?: string;
    background?: string;
    description?: string;
    intro?: string;
    banner?: string;
    preview_list?: string[];
    main_model?: string;
    user_tags?: string[];
    tag_ids?: string[];
}
