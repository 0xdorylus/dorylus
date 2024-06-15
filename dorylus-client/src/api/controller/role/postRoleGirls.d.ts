import { type AssistantListRequestModel } from "../../interface";
/**
 * Girl List
 * /role/girls
 */
export declare function postRoleGirls(input: AssistantListRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        total: number;
        total_page: number;
        list: {
            id: string;
            name: string;
            avatar: string;
            mbti_type: string;
            age: number;
            race: string;
            personality: string;
            school: string;
            major: string;
            hometown: string;
            height: string;
            horoscope_sign: string;
            communication_style: string;
            outfit_style: string;
            hobbies: string;
            occupation: string;
            languages_spoken: string;
            social_media_intro: string;
            background: string;
            is_lock: boolean;
        }[];
    };
}, any>>;
