import request from "@/utils/request.ts";
/**
 * 用户成就模拟
 * /achieve/upsert_user_achieve_item
 */
export function postAchieveUpsertUserAchieveItem(input) {
    return request.post(`/achieve/upsert_user_achieve_item`, input);
}
