<template>
    <div >
        <el-card class="box-card">
            <div class="info-box">
                <el-input placeholder="请输入用户名" v-model="user.account" class="input">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
                <el-input placeholder="请输入密码" v-model="user.passWord" show-password class="input">
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
                <div class="btn-box">
                <el-button type="primary" plain>注册</el-button>
                <el-button type="primary" @click="userLogin">登录</el-button>
                </div>
                </div>
        </el-card>
    </div>
</template>

</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            user:{
                account:"1196218720@qq.com",
                passWord:'888888',
            },
        }
    },
    beforeCreate(){
        console.log(window.innerHeight)
        console.log(window.innerWidth)
    },
    methods: {
        userLogin() {
            let that = this;
            that.$axios({
                method: "post",//指定请求方式
                url: "http://localhost:3300/login",//请求接口（相对接口，后面会介绍到）
                data:that.user,
            }).then(function (res) {
                //接口成功返回结果执行
                const {code,data,message} = res.data;
                if(code == '200'){
                    that.$store.commit('setUserInfo', data)
                    
                    that.$router.push('/')
                }else{
                    that.$message(message);
                }
                
               
            }).catch(function (err) {
                //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
            })
        },
    }
}
</script>

<style scoped>
.box-card{
     width: 320px;
     height: 320px;
    padding: 30px 2px;
   position:absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
}

.input{
    margin: 5px 0;
}
.info-box{
    margin-top: 25%;
}
.btn-box{
    margin: 5px 0;
   
    width: 100%;
     display: grid;
    grid-template-columns: 38% 38%;
    grid-gap: 24%;
}

</style>