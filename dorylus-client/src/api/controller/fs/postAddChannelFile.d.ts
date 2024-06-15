import { type AddChannelFileModel } from "../../interface";
/**
 * 给频道增加文件
 * /add_channel_file
 */
export declare function postAddChannelFile(input: AddChannelFileModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
