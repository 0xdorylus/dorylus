import { type DeviceIdLoginModel } from "../../interface";
/**
 * 设备ID登录
 * /auth/login_with_device_id
 */
export declare function postAuthLoginWithDeviceId(input: DeviceIdLoginModel): Promise<import("axios").AxiosResponse<{
    uid: string;
    pid: string;
    token: string;
    username: string;
    avatar: string;
    invite_code: string;
    invite_link: string;
    jwt_token: string;
    verified: boolean;
}, any>>;
