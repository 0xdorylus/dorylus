/**
 * 获取个人成就
 * /user/achievements
 */
export declare function getUserAchievements(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        tag_counter_list: {
            tag: string;
            num: number;
        }[];
        tag_items_list: {
            tag: string;
            list: {
                id: string;
                uid: string;
                tag: string;
                logo: string;
                name: string;
                logo2: string;
                nft_id: string;
                contract: string;
                chain: string;
                intro: string;
                limit_num: number;
                user_num: number;
            }[];
        }[];
    };
}, any>>;
