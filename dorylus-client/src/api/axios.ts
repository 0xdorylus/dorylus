import axios, { AxiosHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { showMessage } from "./status";   // 引入状态码文件
import { ElMessage } from 'element-plus'  // 引入el 提示框，这个项目里用什么组件库这里引什么
import { useAuthStore } from '@/store/common'

interface GeneralsResponse {
  code: number;
  msg: string;
  result: any;
}

// 设置接口超时时间
axios.defaults.timeout = 60000;

// 请求地址，这里是动态赋值的的环境变量，下一篇会细讲，这里跳过
// @ts-ignore
axios.defaults.baseURL = import.meta.env.VITE_API_DOMAIN;

interface CustomHeaders extends AxiosHeaders {
  'x-auth'?: string | null,
  'x-app'?: string | null,
}

interface CustomConfig extends InternalAxiosRequestConfig {
  headers: CustomHeaders
}

//http request 拦截器
axios.interceptors.request.use(
  (config: CustomConfig) => {
    const authStore = useAuthStore()
    const token = authStore.token
    const app = authStore.app || "athena"
    // 配置请求头
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers['x-auth'] = token
    config.headers['x-app'] = app
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  error => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      showMessage(response.status);           // 传入响应码，匹配响应码对应信息
      return Promise.reject(response.data);
    } else {
      console.log(error);
      ElMessage.warning('网络连接异常,请稍后再试!');
    }
  }
);

function addApisPrefixIfNecessary(url='') {
  if (!url.startsWith('apis')) {
    return 'apis' + url;
  }
  return url;
}


// 封装 GET POST 请求并导出
export function request(url = '', params = {}, type = 'POST'): Promise<GeneralsResponse> {
  //设置 url params type 的默认值
  return new Promise((resolve, reject) => {
    // let target = addApisPrefixIfNecessary(url)
    let promise: Promise<any> = Promise.resolve();
    if (type.toUpperCase() === 'GET') {
      promise = axios({
        url,
        params
      })
    } else if (type.toUpperCase() === 'POST') {
      promise = axios({
        method: 'POST',
        url,
        data: params
      })
    }
    //处理返回
    promise.then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
