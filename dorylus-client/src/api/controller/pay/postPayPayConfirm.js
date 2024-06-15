import request from "@/utils/request.ts";
/**
 * 支付确认
 * /pay/pay_confirm
 */
export function postPayPayConfirm(input) {
    return request.post(`/pay/pay_confirm`, input);
}
