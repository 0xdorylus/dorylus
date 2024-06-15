import { type ContactItemModel } from "../../interface";
/**
 * 添加修改联系人
 * /contact/upsert_contact
 */
export declare function postContactUpsertContact(input: ContactItemModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
