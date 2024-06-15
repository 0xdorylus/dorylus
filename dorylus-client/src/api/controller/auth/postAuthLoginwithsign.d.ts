import { type LoginWithSignModel } from "../../interface";
/**
 * 签名登录
 * /auth/loginwithsign
 */
export declare function postAuthLoginwithsign(input: LoginWithSignModel): Promise<import("axios").AxiosResponse<{
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
