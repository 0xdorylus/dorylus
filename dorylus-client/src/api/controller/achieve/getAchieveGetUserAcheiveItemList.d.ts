/**
 * 用户的成就勋章列表
 * /achieve/get_user_acheive_item_list
 */
export declare function getAchieveGetUserAcheiveItemList(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
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
}, any>>;
