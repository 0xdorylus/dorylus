import { type ContactMemoModel } from "../../interface";
/**
 * 添加修改联系人
 * /contact/set_memo
 */
export declare function postContactSetMemo(input: ContactMemoModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
