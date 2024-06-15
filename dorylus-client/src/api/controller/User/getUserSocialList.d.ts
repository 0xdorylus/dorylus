/**
 * 获取个人社交链接
 * /user/social_list
 */
export declare function getUserSocialList(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        icon: string;
        link: string;
    }[];
}, any>>;
