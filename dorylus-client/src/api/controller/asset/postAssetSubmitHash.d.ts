import { type HashModel } from "../../interface";
/**
 * 提交HASH
 * /asset/submit_hash
 */
export declare function postAssetSubmitHash(input: HashModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
