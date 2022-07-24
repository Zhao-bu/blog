<template>
    <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
            <el-avatar size="small" :src="userInfo.avatar ? userInfo.avatar : circleUrl"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in dropList" :key="item.id" :command="item.path">{{ item.title }}
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    name: 'vAvatar',
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        }
    },
    computed:{
        userInfo(){
            return this.$store.state.userInfo
        },
        dropList(){
            return this.$store.state.dropList
        }
    },
    methods: {
        handleCommand(command) {
            const that = this;
            console.log(command)
            that.$store.commit('setTabIndex', '')
            that.$router.push(command)
            // if (command == "signOut") {
            //     that.$store.commit('setUserInfo', {})
            // } else {
            //     that.$message('click on item ' + command);
            // }

        },
    }
}
</script>

<style>
</style>