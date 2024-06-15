import { type CreateAssistantModel } from "../../interface";
/**
 * 创建角色
 * /role/create
 */
export declare function postRoleCreate(input: CreateAssistantModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        name: string;
        avatar: string;
        intro: string;
        user_tags: string[];
        tag_ids: string[];
    };
}, any>>;
