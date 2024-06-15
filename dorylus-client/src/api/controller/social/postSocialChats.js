import request from "@/utils/request.ts";
/**
 * 会话列表
 * /social/chats
 */
export function postSocialChats() {
    return request.post(`/social/chats`);
}
