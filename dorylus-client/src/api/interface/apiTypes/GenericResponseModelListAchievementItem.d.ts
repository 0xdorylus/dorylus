import { type AchievementItem } from "../../interface";
export interface GenericResponseModelListAchievementItem {
    code?: number;
    message?: string;
    result?: AchievementItem[];
}
