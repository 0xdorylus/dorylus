import { type IdModel } from "../../interface";
/**
 * 删除一条权限
 * /acl/del_group_acl_item
 */
export declare function postAclDelGroupAclItem(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
