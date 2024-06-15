import { type IdModel } from "../../interface";
/**
 * 群权限列表
 * /acl/list_group_acl_item
 */
export declare function postAclListGroupAclItem(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        channel_id: string;
        mainchain: string;
        token: string;
        contract: string;
        num: number;
        acl_type: string;
    }[];
}, any>>;
