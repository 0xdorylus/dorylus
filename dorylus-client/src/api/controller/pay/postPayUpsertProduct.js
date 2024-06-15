import request from "@/utils/request.ts";
/**
 * 添加修改产品
 * /pay/upsert_product
 */
export function postPayUpsertProduct(input) {
    return request.post(`/pay/upsert_product`, input);
}
