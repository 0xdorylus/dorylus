import { type IdModel } from "../../interface";
/**
 * 将对话委托给我创建的AI角色(dev)
 * /user/delegate
 */
export declare function postUserDelegate(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
