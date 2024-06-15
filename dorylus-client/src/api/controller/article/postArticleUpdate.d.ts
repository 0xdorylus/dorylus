import { type UpdateArticleRequestModel } from "../../interface";
/**
 * Update
 * /article/update
 */
export declare function postArticleUpdate(input: UpdateArticleRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        title: string;
        content: string;
        creator: {
            id: string;
            username: string;
            intro: string;
            avatar: string;
            verified: boolean;
            nickname: string;
            user_type: string;
        };
        create_at: string;
    };
}, any>>;
