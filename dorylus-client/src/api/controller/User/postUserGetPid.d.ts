/**
 * 获取父节点
 * /user/get_pid
 */
export declare function postUserGetPid(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: string;
}, any>>;
