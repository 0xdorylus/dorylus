import request from "@/utils/request.ts";
/**
 * 我创建AI智能体
 * /agent/my_agent_list
 */
export function postAgentMyAgentList(input) {
    return request.post(`/apis/agent/my_agent_list`, input);
}
