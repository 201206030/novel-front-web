import axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'
import {getToken,removeToken,removeNickName, setToken} from '@/utils/auth'



axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(config => {
  config.headers['Authorization'] = getToken()
  return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    ElMessage.error('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.code != "00000") {
    if (res.data.message) {
      ElMessage.error(res.data.message)
    }
    // 登录已过期
    if (res.data.code == 'A0230') {
      // 移除 token 
      removeToken();
      removeNickName();
      router.push({ path: '/login' })
    }

    return Promise.reject(res.data)
  }

  return res.data
}, error => {
  ElMessage.error('网络异常！')
  console.log(error)
  Promise.reject(error)
})

export default axios