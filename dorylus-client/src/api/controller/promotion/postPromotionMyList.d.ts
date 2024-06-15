import { type PageRequestModel } from "../../interface";
/**
 * 我的推荐列表
 * /promotion/my_list
 */
export declare function postPromotionMyList(input: PageRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        total: number;
        page: number;
        total_page: number;
        list: {
            username: string;
            create_at: number;
            avatar: string;
            level: number;
            id: string;
        }[];
    };
}, any>>;
