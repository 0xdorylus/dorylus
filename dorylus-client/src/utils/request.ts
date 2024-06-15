import axios from 'axios'
import useUserStore from '@/store/modules/user'
import { logout } from "@/utils/index"
import { useRouter } from "vue-router"
import { ElMessage } from 'element-plus' 

import { useAuthStore } from "@/store/common"

const request = axios.create({
  baseURL: import.meta.env.DEV ? '/apis' : import.meta.env.VITE_APP_API_BASEURL,
  timeout: 1000 * 60,
  responseType: 'json',
})

request.interceptors.request.use((request) => {
  const authStore = useAuthStore()

  // 请求headers自定义带参数
  request.headers['X-Requested-With'] = 'XMLHttpRequest'
  request.headers['Access-Control-Allow-Credentials'] = true
  request.headers['cross-domain'] = true
  request.headers['x-auth'] = authStore.token ?? ''

  return request
})

request.interceptors.response.use(
  (response) => {
    if (response.data.code === 0) {
    } else if (response.data.code === 401) {
      ElMessage.error('Please sign in again')
        logout()
        // next({ path: '/login' });


    } else {
      if (response.data.message) {
        ElMessage.error(response.data.message)
      }
      return Promise.reject(response.data)
    }
    return Promise.resolve(response.data)
  },
  (error) => {
    let message = error.message
    if (message === 'Network Error') {
      message = 'Network Error'
    } else if (message.includes('timeout')) {
      message = 'API Timeout'
    } else if (message.includes('Request failed with status code')) {
      message = `接口${message.substr(message.length - 3)}异常`
    }
    ElMessage.error(message)
    return Promise.reject(error)
  }
)
export default request
