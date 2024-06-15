import { type ReferalModel } from "../../interface";
/**
 * 更新资料，为空忽略
 * /user/set_parent
 */
export declare function postUserSetParent(input: ReferalModel): Promise<import("axios").AxiosResponse<{
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
