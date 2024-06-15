import { type DeleteUserFromChannelModel } from "../../interface";
/**
 * 从频道删除用户
 * /social/delete_user_from_channel
 */
export declare function postSocialDeleteUserFromChannel(input: DeleteUserFromChannelModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
