/**
 * 成就勋章列表
 * /achieve/get_acheive_item_list
 */
export declare function getAchieveGetAcheiveItemList(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        tag: string;
        logo: string;
        name: string;
        logo2: string;
        nft_id: string;
        contract: string;
        chain: string;
        intro: string;
        limit_num: number;
    }[];
}, any>>;
