import { utils, Wallet } from 'ethers'
import type { HDNode } from 'ethers/lib/utils'

export type WalletType = {
  address: string
  privateKey: string
}
export type batchWallet = {
  mnemonic?: string
  wallets: WalletType[]
}

// 判断是否是钱包地址
export function isAddress(address: string): boolean {
  return utils.isAddress(address)
}

// 判断是否是助记词
export function isValidMnemonic(mnemonic: string): boolean {
  return utils.isValidMnemonic(mnemonic)
}

// 创建随机钱包
export function createRandomWallet(): Wallet {
  return Wallet.createRandom()
}

// 生成随机助记词
export function createMnemonic(): string {
  return utils.entropyToMnemonic(utils.randomBytes(32))
}

// 根据助记词创建钱包
export function createMnemonicWallet(mnemonic: string): HDNode {
  if (!isValidMnemonic(mnemonic)) {
    throw new Error('invalid mnemonic')
  }
  // 创建HD钱包
  const hdNode = utils.HDNode.fromMnemonic(mnemonic)
  return hdNode
}

// 创建加密钱包
export async function createEncryptWallet(password: string, callback?: Function): Promise<string> {
  if (!password) {
    throw new Error('invalid password')
  }
  if (callback && typeof callback !== 'function') {
    throw new Error('invalid callback')
  }
  return await Wallet.createRandom().encrypt(password, (progress: number) => {
    callback && callback(progress)
  })
}

// 解密加密钱包
export async function fromEncryptedWallet(
  keystore: string,
  password: string,
  callback?: Function,
): Promise<Wallet> {
  if (!password) {
    throw new Error('invalid password')
  }
  if (callback && typeof callback !== 'function') {
    throw new Error('invalid callback')
  }
  return await Wallet.fromEncryptedJson(keystore, password, (progress: number) => {
    callback && callback(progress)
  })
}

// 同一个助记词批量生成钱包
export async function createBatchWallet(num: number, mnemonic?: string): Promise<batchWallet> {
  if (!mnemonic) {
    mnemonic = createMnemonic()
  }
  if (!isValidMnemonic(mnemonic)) {
    throw new Error('invalid mnemonic')
  }
  const hdNode = utils.HDNode.fromMnemonic(mnemonic)
  const basePath = "m/44'/60'/0'/0"
  const wallets: WalletType[] = []
  for (let i = 0; i < num; i++) {
    const wallet = hdNode.derivePath(basePath + '/' + i)
    wallets.push({
      address: wallet.address,
      privateKey: wallet.privateKey,
    })
  }
  return {
    wallets,
    mnemonic,
  }
}
