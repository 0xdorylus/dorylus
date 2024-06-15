/**
 * Download File
 * /download/{file_id}
 */
export declare function getDownloadByFileId(params: GetDownloadByFileIdParams): Promise<import("axios").AxiosResponse<unknown, any>>;
interface GetDownloadByFileIdParams {
    file_id: string;
    summary?: unknown;
}
export {};
