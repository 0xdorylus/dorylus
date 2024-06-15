import { type PayProductItem } from "../../interface";
/**
 * 添加修改产品
 * /pay/upsert_product
 */
export declare function postPayUpsertProduct(input: PayProductItem): Promise<import("axios").AxiosResponse<{
    id: string;
    product_id: string;
    price: number;
    days: number;
    desc: string;
    title: string;
    promote: string;
}, any>>;
