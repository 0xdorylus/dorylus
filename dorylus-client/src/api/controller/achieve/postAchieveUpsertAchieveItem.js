import request from "@/utils/request.ts";
/**
 * 初始化系统的成就配置
 * /achieve/upsert_achieve_item
 */
export function postAchieveUpsertAchieveItem(input) {
    return request.post(`/achieve/upsert_achieve_item`, input);
}
