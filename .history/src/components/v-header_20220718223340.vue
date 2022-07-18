<template>
    <div class="v-grid-header">
        <div class="v-logo">
            <img
                src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-3393facb-1b77-48a7-86d7-13d5976f7748/3be09ab0-622f-4bc8-ab91-b11146dab6ed.png">
            <div>blog</div>
        </div>
        <div class="v-tab">
            <el-menu :default-active="tabIndex" active-text-color="#409EFF" class="el-menu-demo" mode="horizontal"
                @select="handleSelect">
                <el-menu-item :index="item.id" v-for="item in tabList" :key="item.id">{{ item.title }}
                </el-menu-item>
                <!-- <el-submenu index="item.id">
                        <template slot="title">{{item.title}}</template>
                        <el-menu-item :index="menu.id" v-for="menu in item.submenu" :key="menu.id">{{menu.title}}</el-menu-item>
                    </el-submenu> -->
            </el-menu>
        </div>
        <div class="v-search">
            <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-search" v-model="search">
            </el-input>
        </div>
        <div class="v-tool">
            <div class="login-font" v-if="!isLogin" @click="userLogin"> 登录 </div>
            <el-dropdown v-else @command="handleCommand">
                <span class="el-dropdown-link">
                    <el-avatar size="small" :src="userInfo.avatar ? userInfo.avatar:circleUrl"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item v-for="item in dropList" :key="item.id"  :command="item.path">{{ item.title }}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-button type="primary" class="writing" icon="el-icon-edit" size="mini">写文章</el-button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'; // 从vuex中导入mapState
export default {
    name: 'vheader',
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            search: '',
        };
    },
    computed: {
        isLogin() {
            return this.checkLogin()
        },
        ...mapState(['tabList', 'tabIndex', 'dropList', 'userInfo']), // 经过解构后，自动就添加到了计算属性中，此时就可以直接像访问计算属性一样访问它
    },
    methods: {
        handleSelect(key, keyPath) {
            this.$store.commit('setTabIndex', key)
        },
        userLogin() {
            let that = this
            that.$axios({
                method: "get",//指定请求方式
                url: "http://localhost:3300/login",//请求接口（相对接口，后面会介绍到）
            }).then(function (res) {
                //接口成功返回结果执行
                console.log(res.data.data)
                that.$store.commit('setUserInfo', res.data.data)
            }).catch(function (err) {
                //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
            })
        },
        handleCommand(command) {
            const that = this;
            if(command == "signOut"){
                that.$store.commit('setUserInfo', {})
            }else{
                this.$message('click on item ' + command);
            }
            
        },
        checkLogin() {
            const userInfo = this.userInfo
            if (userInfo === undefined) {
                return false
            }
            if (userInfo === null) {
                return false
            }
            if (userInfo === '') {
                return false
            }
            if (JSON.stringify(userInfo) === '{}') {
                return false
            }
            return true
        },
    }
}
</script>

<style scoped>
.v-grid-header {
    display: grid;
    width: 100%;
    grid-template-columns: 15% 55% 17% 10%;
    grid-gap: 1%;
    border-bottom: 1px solid #d9ecff;
}

.v-logo>img {
    margin-top: 5px;
    width: 50px;
    height: 50px;
}

.v-logo>div {
    font-size: 28px;
    color: #409EFF;
    padding-left: 5px;
}

.v-logo {
    display: flex;
    align-items: center;
    padding-left: 50px;
}

.v-search {
    display: flex;
    align-items: center;
}

.v-tool {
    align-items: center;
    display: flex;
}

.el-menu-demo {
    border: 0;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}

.el-icon-arrow-down {
    font-size: 12px;
}

.login-font {
    font-size: 14px;
    color: gray;
}
.writing{
    float: right;
}
</style>