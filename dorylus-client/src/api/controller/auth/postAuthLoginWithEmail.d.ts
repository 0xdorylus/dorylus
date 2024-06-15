import { type LoginWithEmailModel } from "../../interface";
/**
 * 使用email登录
 * /auth/login_with_email
 */
export declare function postAuthLoginWithEmail(input: LoginWithEmailModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        uid: string;
        pid: string;
        token: string;
        username: string;
        avatar: string;
        invite_code: string;
        invite_link: string;
        jwt_token: string;
        verified: boolean;
    };
}, any>>;
