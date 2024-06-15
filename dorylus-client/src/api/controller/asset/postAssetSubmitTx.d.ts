import { type SubmitTxModel } from "../../interface";
/**
 * 提交交易hash
 * /asset/submit_tx
 */
export declare function postAssetSubmitTx(input: SubmitTxModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
