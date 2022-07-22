import request from '@/api/utils/request'

const demo ={
    login(params){
        return request.post('/admin/user/login', params)
    },
    getBlog(params){
        return request.post('/admin/article/getBlog', params)
    },
    publish(params){
        return request.post('/admin/article/publish', params)
    },
    getUser(params){
        return request.post('/admin/user/getUser', params)
    }
}
export default demo

// this.$api.demo.getBlog().then((res) => {})