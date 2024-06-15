import { type HotModel } from "../../interface";
/**
 * 切换HOT模式
 * /user/set_hot_model
 */
export declare function postUserSetHotModel(input: HotModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
