export const truncateAddress = (address: string) => {
  if (!address) return 'No Account'
  const match = address.match(/^(0x[a-zA-Z0-9]{3})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/)
  if (!match) return address
  return `${match[1]}****${match[2]}`
}

export const toHex = (num: number) => {
  const val = Number(num)
  return '0x' + val.toString(16)
}

export const toNumber = (str: string): number => {
  return parseInt(str.replace('0x', ''), 10)
}

// 导出文件
export function exportFile(data: string, fileName: string): void {
  const streamData = new Blob([data], {
    type: 'application/octet-stream',
  })
  const link = document.createElement('a')
  link.download = fileName
  link.style.display = 'none'
  link.href = window.URL.createObjectURL(streamData)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function _isMobile() {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag;
}
/**
 * 隐藏
 */
export function maskMiddleSix(str: string): string {
  const len = str.length;
  if (len < 6) {
    return str;
  }
  const start = Math.ceil(len / 2) - 3;
  const end = start + 6;
  return (
    str.substring(0, start) +
    '******' +
    str.substring(end)
  );
}

/**
 * 生成随机颜色
 * @returns {string} 颜色值
 */
export function generateRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
import { postAuthLogout } from '@/api/controller/auth/postAuthLogout.js'
import useUserStore from '@/store/modules/user.js'
import router from '@/router'


export const logout = async () => {
  const userStore = useUserStore()
  userStore.setBaseUserInfo({})
  userStore.setBdcode(0)
  await postAuthLogout()
  router.push('/login')
}