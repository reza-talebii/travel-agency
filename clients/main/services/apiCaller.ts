import { signOutHandler } from '@/helper/auth/signOut'
import { message } from 'antd'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { axiosInstance } from './axiosInstance'

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status >= 200 && response.status < 300 && response.config.method !== 'GET') {
      message.success('mission accomplished')
    }
    return response
  },
  (error: AxiosError<{ message: string }>) => {
    const errorStatus = error.response?.status
    const errorMessage = error.response?.data?.message

    switch (errorStatus) {
      case 401:
        signOutHandler()
        break
      case 400:
        message.error(errorMessage)
        break

      case 500:
        message.error('internal server error')
        break

      default:
        message.error('something went wrong')
        break
    }

    return Promise.reject(error)
  },
)
axiosInstance.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
)

type Method = 'get' | 'post' | 'put' | 'delete'

interface IArgs {
  method: Method
  url: string
  data?: unknown
  config?: AxiosRequestConfig
}

export const apiCaller = async <T = void>({ method, url, config, data }: IArgs) => {
  try {
    const res = await axiosInstance.request<T>({
      method,
      url,
      data,
      ...config,
    })
    if (res.status >= 200 && res.status < 300) {
      return res
    }
  } catch (error) {
    console.log(error)
  }
}
