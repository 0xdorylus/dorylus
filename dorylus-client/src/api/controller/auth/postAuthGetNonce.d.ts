/**
 * 获得随机数
 * /auth/get_nonce
 */
export declare function postAuthGetNonce(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        nonce: string;
    };
}, any>>;
