import request from '@/api/utils/request'

const demo ={
    login(params){
        return request.post('/login', params)
    },
    getBlog(params){
        return request.post('/getBlog', params)
    },
    publish(params){
        return request.post('/publish', params)
    },
    getUser(params){
        return request.post('/getUser', params)
    }
}
export default demo

// this.$api.demo.getBlog().then((res) => {})