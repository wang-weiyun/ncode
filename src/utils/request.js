import axios from "axios";

const instance = axios.create({
  baseURL: '  https://cnodejs.org/api/v1 ',
  timeout: 5000
})

instance.interceptors.response.use(res => {
  return res.data
})

// get 传递参数 一般是直接在地址栏后面拼上参数
// 比如  /books?pageNum=2&pageSize=10
// 请求的时候 params 就会自动在地址栏拼接
export const getAction = (url, data) => 
  instance ({
    methods: 'GET',
    url,
    params: data
  })


export const postAction = (url, data) => 
  instance({
    methods: 'POST',
    url,
    data
  })


export const deleteAction = (url, data) => 
  instance({
    methods: 'DELETE',
    url,
    data
  })


export const patchAction = (url, data) => 
  instance({
    methods: 'PATCH',
    url,
    data
  })


export default instance