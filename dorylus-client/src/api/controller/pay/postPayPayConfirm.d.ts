import { type PayConfirmItem } from "../../interface";
/**
 * 支付确认
 * /pay/pay_confirm
 */
export declare function postPayPayConfirm(input: PayConfirmItem): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
