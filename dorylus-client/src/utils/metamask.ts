
type NativeCurrency = {
    name: string,
    symbol: string,
    decimals: number,
  }
  type NETWORK = {
    chainId: string,
    chainName: string,
    nativeCurrency: NativeCurrency,
    rpcUrls: string[],
    blockExplorerUrls: string[],
  }
  type ERC20_COIN = {
    address: string,
    symbol: string,
    decimals: number,
    image?: string,
  }
  
  // 切换网络
  export async function changeNetwork(chainId: string) {
    return window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [
        {
          chainId
        },
      ],
    })
  }
  
  // 添加网络
  export async function addNetwork(network: NETWORK) {
    return window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [network],
    })
  }
  
  // 添加币种到Metamask
  export async function addWatchAsset(options: ERC20_COIN) {
    window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options,
      },
    })
  }
  