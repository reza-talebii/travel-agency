import { message } from 'antd'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { axiosInstance } from './axiosInstance'

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    if (response.status >= 200 && response.status < 300) {
      return { status: response.status, data: response.data }
    }
    return response
  },
  (error: AxiosError<{ message: string }>) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.pathname = '/login'
    }
    if (error.response?.status === 400) message.error(error?.response?.data?.message!)

    return Promise.reject(error)
  },
)
axiosInstance.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
)

export const apiCaller = {
  get: async <T>(url: string, config?: AxiosRequestConfig<unknown>) => await axiosInstance.get<T>(url, config),
  post: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig<unknown>) => await axiosInstance.post<T>(url, data, config),
  put: async <T>(url: string, data: unknown, config?: AxiosRequestConfig<unknown>) => await axiosInstance.put<T>(url, data, config),
  delete: async <T>(url: string, data: any) => await axiosInstance.delete<T>(url, data),
}
