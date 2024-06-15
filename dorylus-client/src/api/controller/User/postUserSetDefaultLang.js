import request from "@/utils/request.ts";
/**
 * 获取父节点
 * /user/set_default_lang
 */
export function postUserSetDefaultLang(input) {
    return request.post(`/user/set_default_lang`, input);
}
