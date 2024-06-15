import { type CreateGroupModel } from "../../interface";
/**
 * 创建群
 * /social/create_group
 */
export declare function postSocialCreateGroup(input: CreateGroupModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
