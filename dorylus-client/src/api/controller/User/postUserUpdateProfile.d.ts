import { type UpdateUserModel } from "../../interface";
/**
 * 更新资料，为空忽略
 * /user/update_profile
 */
export declare function postUserUpdateProfile(input: UpdateUserModel): Promise<import("axios").AxiosResponse<{
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
