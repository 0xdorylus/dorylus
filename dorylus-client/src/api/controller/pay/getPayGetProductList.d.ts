/**
 * 支付产品列表
 * /pay/get_product_list
 */
export declare function getPayGetProductList(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        product_id: string;
        price: number;
        days: number;
        desc: string;
        title: string;
        promote: string;
    }[];
}, any>>;
