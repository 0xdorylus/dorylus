import { type LangSetModel } from "../../interface";
/**
 * 获取父节点
 * /user/set_default_lang
 */
export declare function postUserSetDefaultLang(input: LangSetModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: string;
}, any>>;
