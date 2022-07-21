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
                <el-menu-item :index="item.id" v-for="item in tabList" :key="item.id" :disabled="item.disabled">{{ item.title }}
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
            <div class="login-font" v-if="!isLogin" @click="$router.push('/login')"> 登录 </div>
            <div  v-else style="text-align: center;">
                <v-avatar></v-avatar>
            </div>
            <el-button type="primary" class="writing" icon="el-icon-edit" size="mini" @click="toWrite">发博</el-button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'; // 从vuex中导入mapState
import vAvatar from '@/components/v-avatar';
export default {
  components: { vAvatar },
    name: 'vHeader',
    data() {
        return {
            
            search: '',
        };
    },
    computed: {
        isLogin() {
            return this.checkLogin()
        },
        ...mapState(['tabList', 'tabIndex', 'userInfo']), // 经过解构后，自动就添加到了计算属性中，此时就可以直接像访问计算属性一样访问它
    },
    methods: {
        handleSelect(key, keyPath) {
            const that = this;
            if(key == that.tabIndex){
                return
            }else{
                let index = parseInt(key) - 1;
                that.$store.commit('setTabIndex', key)
                that.$router.push(that.tabList[index].path);
            }
        },
        toWrite(){
            this.$router.push('/write')
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
    grid-template-columns: 14% 55% 16% 12%;
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
    display: grid;
    width: 100%;
    grid-template-columns: 29% 70%;
    grid-gap: 1%;
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
    text-align: center;
}
.writing{
    width: 70%;
    margin-left: 15%;
}
</style>