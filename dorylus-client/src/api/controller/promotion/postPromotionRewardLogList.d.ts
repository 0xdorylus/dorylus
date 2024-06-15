import { type PageRequestModel } from "../../interface";
/**
 * 推荐奖励列表
 * /promotion/reward_log_list
 */
export declare function postPromotionRewardLogList(input: PageRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        total: number;
        page: number;
        total_page: number;
        list: {
            uid: string;
            op_type: string;
            desc: string;
            create_at: number;
        }[];
    };
}, any>>;
