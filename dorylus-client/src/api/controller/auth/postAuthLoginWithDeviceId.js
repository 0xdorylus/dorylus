import request from "@/utils/request.ts";
/**
 * 设备ID登录
 * /auth/login_with_device_id
 */
export function postAuthLoginWithDeviceId(input) {
    return request.post(`/auth/login_with_device_id`, input);
}
