import { type SignUpWithEmailModel } from "../../interface";
/**
 * 使用过email创建账号
 * /auth/account/create_with_email
 */
export declare function postAuthAccountCreateWithEmail(input: SignUpWithEmailModel): Promise<import("axios").AxiosResponse<{
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
    };
}, any>>;
