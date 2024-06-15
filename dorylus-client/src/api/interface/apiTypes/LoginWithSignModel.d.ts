export interface LoginWithSignModel {
    /** 区块链钱包地址 */
    address?: string;
    /** 签名的消息 */
    msg?: string;
    /** 签名 */
    sig?: string;
    /** 随机数 */
    nonce?: string;
    /** 邀请码 */
    refcode?: unknown;
    /** 客户端ID */
    client_id?: unknown;
}
