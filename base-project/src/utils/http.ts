import { ElMessage } from 'element-plus';

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HTTP_RESPONSE_TYPE } from '@/types/index';

const codeMessage: { [key: string]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

export class HttpClient {
  public client: AxiosInstance;

  constructor(option?: AxiosRequestConfig) {
    this.client = axios.create(option);
    // 处理 sso 过期返回 httpCode 302 问题 添加 x-requested-with:XMLHttpRequest header https://km.sankuai.com/page/60887101
    this.client.defaults.headers.common['x-requested-with'] = 'XMLHttpRequest';
    // sso interceptor
    this.client.interceptors.response.use(
      (res) => res,
      (err) => {
        if (err.response) {
          if (err.response.status === 401) {
            // const { pathname = '', search } = window?.location || {};
            // resetRewriteLocation(pathname);
            // const url = sso.createRedirectUrl(search);
            // window.location.href = sso.getLoginUrl(url);
          } else if (err.response.status in codeMessage) {
            const msg = codeMessage[err.response.status];
            ElMessage.error(msg);
          } else {
            ElMessage.error('服务错误');
          }
        } else if (err.request) {
          console.log('request error not receive response');
        } else {
          console.log('request error in setting up request');
        }
        return Promise.reject(err);
      }
    );
  }

  // eslint-disable-next-line no-unused-vars
  addResInterceptor(interceptor: (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>) {
    this.client.interceptors.response.use(interceptor, (err) => Promise.reject(err));
  }

  // public setSsoid(id: string) {
  //   this.client.defaults.headers.common['access-token'] = id;
  // }

  get(url: string, config?: AxiosRequestConfig) {
    const u = decodeURI(encodeURI(url).replace(/%E2%80%8B/g, ''));
    return this.client.get(u, config);
  }

  post(url: string, data?: Object, config?: AxiosRequestConfig) {
    return this.client.post(url, data, config);
  }

  put(url: string, data?: Object, config?: AxiosRequestConfig) {
    return this.client.put(url, data, config);
  }

  patch(url: string, data?: Object, config?: AxiosRequestConfig) {
    return this.client.patch(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.client.delete(url, config);
  }
}

const http = new HttpClient();

http.addResInterceptor((res: HTTP_RESPONSE_TYPE) => {
  const { code } = res.data;
  let { msg = undefined } = res.data;
  if (code !== 0) {
    const setErrMsg = (customErrMsg: string | undefined) => {
      msg = customErrMsg;
    };
    setTimeout(() => {
      ElMessage.error(msg);
    });
    const err = {
      ...res.data,
      setErrMsg
    };
    return Promise.reject(err);
  }
  return res.data;
});

export default http;
