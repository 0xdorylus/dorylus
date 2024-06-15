export interface AuthResponseModel {
    uid: string;
    pid: string;
    token: string;
    username: string;
    avatar: string;
    invite_code: string;
    invite_link: string;
    jwt_token: string;
    verified?: boolean;
}
