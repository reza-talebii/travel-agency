import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { axiosInstance } from './axiosInstance'

const checkStatus = (response: AxiosResponse) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data
  }
  throw new Error(`HTTP Error ${response.status}`)
}

axiosInstance.interceptors.response.use(checkStatus)

export const apiCaller = {
  get: async <T>(url: string, config?: AxiosRequestConfig<unknown>) => await axiosInstance.get<T>(url, config),
  post: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig<unknown>) => await axiosInstance.post<T>(url, data, config),
  put: async <T>(url: string, data: unknown, config?: AxiosRequestConfig<unknown>) => await axiosInstance.put<T>(url, data, config),
  delete: async <T>(url: string, data: any) => await axiosInstance.delete<T>(url, data),
}
