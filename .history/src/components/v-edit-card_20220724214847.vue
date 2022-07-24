<template>
    <el-card class="box-card" shadow="hover">
        <p>个人资料</p>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
    </el-card>
</template>

<script>
export default {
    name: 'vEditCard',
    data() {
        return {
            input: ''
        }
    }
}
</script>

<style>
.box-card {
    height: 600px;
    width: 70%;
    margin-top: 6px;
    padding: 0 15% 0 15%;
}
</style>