import { type TokenGateItemModel } from "../../interface";
/**
 * 配置群权限
 * /acl/upsert_group_acl_item
 */
export declare function postAclUpsertGroupAclItem(input: TokenGateItemModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
