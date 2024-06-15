import request from "@/utils/request.ts";
/**
 * 获取个人成就
 * /user/achievements
 */
export function getUserAchievements() {
    return request.get(`/user/achievements`);
}
