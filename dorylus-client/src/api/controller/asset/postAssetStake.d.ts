import { type StakeModel } from "../../interface";
/**
 * 质押积分
 * /asset/stake
 */
export declare function postAssetStake(input: StakeModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
