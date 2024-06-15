/**
 * 推广统计
 * /promotion/stat
 */
export declare function postPromotionStat(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        level: number;
        assets: {
            WISH: number;
            SCORE: number;
            TICKET: number;
        };
    };
}, any>>;
