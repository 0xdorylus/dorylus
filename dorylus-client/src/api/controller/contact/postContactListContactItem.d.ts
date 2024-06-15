import { type PageRequestModel } from "../../interface";
/**
 * 联系人列表
 * /contact/list_contact_item
 */
export declare function postContactListContactItem(input: PageRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        total: number;
        total_page: number;
        list: {
            id: string;
            username: string;
            channel_id: string;
            receiver: string;
            memo: string;
            avatar: string;
            user: any;
            type: string;
        }[];
    };
}, any>>;
