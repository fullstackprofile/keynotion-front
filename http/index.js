import axios from 'axios'
import { parseCookies } from 'nookies'
import { cookie } from '../components/Login/Login'

export const instance = axios.create({
  baseURL: 'http://laratest.key-notion.com/api',
  headers: {
    Accept: 'application/json',
  },
})

instance.interceptors.request.use(
  function (config) {
    const cookie = parseCookies('token')
    console.log(cookie)
    config.headers['Authorization'] = `Bearer ${cookie.token}`
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      throw Error('401a ekel')
    }
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)
