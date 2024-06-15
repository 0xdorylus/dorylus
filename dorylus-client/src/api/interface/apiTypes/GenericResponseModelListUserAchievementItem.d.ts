import { type UserAchievementItem } from "../../interface";
export interface GenericResponseModelListUserAchievementItem {
    code?: number;
    message?: string;
    result?: UserAchievementItem[];
}
