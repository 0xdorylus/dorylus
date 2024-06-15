import { type CreateAgentModel } from "../../interface";
/**
 * 创建AI智能体
 * /agent/create_agent
 */
export declare function postAgentCreateAgent(input: CreateAgentModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: string;
}, any>>;
