/**
 * 获取个人基本数据
 * /user/me
 */
export declare function getUserMe(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        username: string;
        intro: string;
        avatar: string;
        verified: boolean;
        nickname: string;
        user_type: string;
        pid: string;
        level: number;
        invite_num: number;
        offical_verified: boolean;
    };
}, any>>;
