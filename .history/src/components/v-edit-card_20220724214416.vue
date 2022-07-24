<template>
    <el-card class="box-card" shadow="hover">
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
}
</style>