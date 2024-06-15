import { type UserAchievementCounterModel, type UserAchievementTagModel } from "../../interface";
export interface UserAchievementStatModel {
    tag_counter_list?: UserAchievementCounterModel[];
    tag_items_list?: UserAchievementTagModel[];
}
