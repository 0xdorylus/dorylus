import request from "@/utils/request.ts";
/**
 * 支付产品列表
 * /pay/get_product_list
 */
export function getPayGetProductList() {
    return request.get(`/pay/get_product_list`);
}
