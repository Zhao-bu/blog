import axios from 'axios'

// 创建axios实例
const HTTP = axios.create({
    baseURL: 'http://localhost:3300',
    timeout: 60000
})

// 请求拦截
// HTTP.interceptors.request.use(config => {
//     //设置请求头信息
//     let token = localStorage.getItem('token') || ''
//     let uuid = localStorage.getItem('uuid') || ''
//     const headersOption ={
//         token,
//         uuid
//     }
//     config.headers = Object.assign(config.headers, headersOption)
//     return config
// }, err => {
//     console.log(err);
// })

// 响应拦截
HTTP.interceptors.response.use(res => {
    return new Promise((resolve, reject) => {
        if(res.status ===200) {
            // 可以继续细分接口返回res.data.status/res.data.code状态码的判断
            resolve(res.data);
        }else {
            reject(res)
        }
    });
},err => {
    console.log(err);
})

export default HTTP
