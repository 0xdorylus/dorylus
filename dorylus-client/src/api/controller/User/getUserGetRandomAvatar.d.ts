/**
 * 获取随机头像
 * /user/get_random_avatar
 */
export declare function getUserGetRandomAvatar(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: string;
}, any>>;
