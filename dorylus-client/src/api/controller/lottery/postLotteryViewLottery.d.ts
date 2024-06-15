import { type IdModel } from "../../interface";
/**
 * View Lottery
 * /lottery/view_lottery
 */
export declare function postLotteryViewLottery(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        title: string;
        num: number;
        code: string;
        status: string;
        is_admin: boolean;
        create_at: string;
    };
}, any>>;
