<template>
    <div >
        <el-card class="box-card" v-if="isLogin">
            <div class="info-box">
                <el-input placeholder="请输入用户名" v-model="user.account" class="input">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
                <el-input placeholder="请输入密码" v-model="user.passWord" show-password class="input">
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
                <div class="btn-box">
                <el-button type="primary" plain @click="register">注册</el-button>
                <el-button type="primary" @click="userLogin">登录</el-button>
                </div>
                </div>
        </el-card>
        <el-card class="box-card" v-else>
            <div class="info-box">
                <el-input placeholder="请输入用户名" v-model="user.account" class="input">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
                <el-input placeholder="请输入密码" v-model="user.passWord" show-password class="input">
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
                <div class="btn-box">
                <!-- <el-button type="primary" plain>注册</el-button>
                <el-button type="primary" @click="userLogin">登录</el-button> -->
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
                account:"admin",
                passWord:'123456',
                isLogin:true
            },
        }
    },
    beforeCreate(){
        console.log(window.innerHeight)
        console.log(window.innerWidth)
    },
    methods: {
        register(){
            let that = this;
            that.isLogin = false;
        },
        userLogin() {
            let that = this;
            this.$api.demo.login(that.user).then((res)=>{
                console.log(res)
                //接口成功返回结果执行
                const {code,data,message} = res;
                if(code == '200'){
                    sessionStorage.setItem('userInfo', JSON.stringify(data)) // 本地存储一份
                    that.$store.commit('setUserInfo', data)
                    that.$router.push('/')
                }else{
                    that.$message(message);
                }
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