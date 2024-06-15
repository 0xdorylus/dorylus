import { type PageRequestModel } from "../../interface";
/**
 * List Lottery
 * /lottery/list_lottery
 */
export declare function postLotteryListLottery(input: PageRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        page: number;
        total_page: number;
        list: {
            id: string;
            title: string;
            num: number;
            code: string;
            status: string;
            create_at: string;
        }[];
    };
}, any>>;
