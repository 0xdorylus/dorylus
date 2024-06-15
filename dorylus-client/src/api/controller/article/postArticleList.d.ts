import { type ArticleListRequestModel } from "../../interface";
/**
 * List Article
 * /article/list
 */
export declare function postArticleList(input: ArticleListRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        total: number;
        total_page: number;
        list: {
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
        }[];
    };
}, any>>;
