import { type GeneralRequestModel } from "../../interface";
/**
 * 智能体列表
 * /agent/agent_list
 */
export declare function postAgentAgentList(input: GeneralRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        total: number;
        total_page: number;
        list: {
            uid: string;
            name: string;
            nickname: string;
            avatar: unknown;
            greeting: unknown;
            temperature: unknown;
            visiablity: unknown;
            subscribed_num: unknown;
            chat_num: unknown;
            share_num: unknown;
            prompt: unknown;
            system_prompt: unknown;
            background: unknown;
            description: unknown;
            intro: unknown;
            banner: string;
            preview_list: string[];
            main_model: unknown;
            user_tags: unknown;
            tag_ids: unknown;
            language: unknown;
            free_talk_num: unknown;
            tool_ids: unknown;
            height: unknown;
            mbti: unknown;
            create_at: number;
        }[];
    };
}, any>>;
