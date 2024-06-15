import { type PageRequestModel } from "../../interface";
/**
 * 别人请求我和我请求别人的列表
 * /social/friend_request_list
 */
export declare function postSocialFriendRequestList(input: PageRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        recieve_list: {
            id: string;
            sender: string;
            receiver: string;
            memo: string;
            status: string;
            create_at: string;
        }[];
        send_list: {
            id: string;
            sender: string;
            receiver: string;
            memo: string;
            status: string;
            create_at: string;
        }[];
    };
}, any>>;
