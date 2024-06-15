import { type AgentModelsRequestResponseModelInviteModel } from "../../interface";
/**
 * 添加推荐人
 * /promotion/add_referal
 */
export declare function postPromotionAddReferal(input: AgentModelsRequestResponseModelInviteModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: null;
}, any>>;
