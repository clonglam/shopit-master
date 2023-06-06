import axios, { AxiosRequestConfig } from 'axios'

export const url = import.meta.env.VITE_BACKEND_DOMAIN

const token = sessionStorage.getItem('token')

const axiosInstance = axios.create({
  baseURL: url,
  headers: { 'x-auth-token': token ? token : null },
  withCredentials: true,
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance.get<T[]>(this.endpoint, config).then((res) => res.data)

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data)
  }
  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data)
  }
  delete = (id: number | string) => {
    return axiosInstance
      .delete<T>(this.endpoint + '/' + id)
      .then((res) => res.data)
  }
}

export default APIClient
