import request from "@/utils/request.ts";
/**
 * 智能体列表
 * /agent/agent_list
 */
export function postAgentAgentList(input) {
    return request.post(`/apis/agent/agent_list`, input);
}
