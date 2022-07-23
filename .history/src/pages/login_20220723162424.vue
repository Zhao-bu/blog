<template>
    <div >
        <el-card class="box-card" v-if="showLogin">
            <div class="info-box">
                <el-input placeholder="请输入用户名" v-model="user.account" class="input">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
                <el-input placeholder="请输入密码" v-model="user.passWord" show-password class="input">
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
                <div class="btn-box">
                <el-button type="primary" plain @click="showLogin = false">注册</el-button>
                <el-button type="primary" @click="userLogin">登录</el-button>
                </div>
                </div>
        </el-card>
        <el-card class="box-card" v-else>
            <div class="info-box">
                <el-input placeholder="请输入昵称" v-model="user.nickName" class="input">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
                <el-input placeholder="请输入用户名" v-model="user.account" class="input">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
                <el-input placeholder="请输入密码" v-model="user.passWord" show-password class="input">
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
                <div class="btn-box-r">
                    <el-button type="primary" @click="register">注册</el-button>
                </div>
                <p class="tips" @click="showLogin = true"> <i class="el-icon-arrow-left"></i>已注册去登录</p>
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
                nickName:'',
                avatar:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
            },
            showLogin:true
        }
    },
    beforeCreate(){
        console.log(window.innerHeight)
        console.log(window.innerWidth)
    },
    methods: {
        register(){
            let that = this;
            if(!that.checkInput()){
                return
            }
            this.$api.demo.register(that.user).then((res)=>{
                that.$message(res.message);
            })
        },
       
        userLogin() {
            let that = this;
            if(!that.checkInput()){
                return
            }
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
        checkInput(){
            let that =this;
            let {account,passWord,nickName} = that.user;
            if(account == ''){
                that.$message('请输入用户名');
                return false
            }
            else if(passWord == ''){
                that.$message('请输入密码');
                return false
            }
            else if(nickName == '' &&  !that.showLogin) {
                that.$message('昵称不能为空');
                return false
            }else{
                return true
            }
        }
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
.btn-box-r{
    width: 100%;
    margin: 20px 0;
    text-align: center;
}
.tips{
    font-size: 12px;
    color: #409EFF;
}
</style>