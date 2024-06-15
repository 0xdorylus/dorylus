import { type BodyLoginAuthTokenPost } from "../../interface";
/**
 * Login
 * /auth/token
 */
export declare function postAuthToken(input: BodyLoginAuthTokenPost): Promise<import("axios").AxiosResponse<unknown, any>>;
