import request from "@/utils/request.ts";
/**
 * 创建AI智能体
 * /agent/create_agent
 */
export function postAgentCreateAgent(input) {
    return request.post(`/agent/create_agent`, input);
}
