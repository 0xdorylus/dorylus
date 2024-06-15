/**
 * 系统tag分类列表
 * /role/tag_list
 */
export declare function postRoleTagList(): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        category: string[];
        items: {
            id: string;
            title: string;
            value: string;
            tag: string;
        }[];
    };
}, any>>;
