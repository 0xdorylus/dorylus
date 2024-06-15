export interface BizAuthResponseModel {
    uid: string;
    token: string;
    username?: string;
    avatar?: string;
    acl?: string[];
}
