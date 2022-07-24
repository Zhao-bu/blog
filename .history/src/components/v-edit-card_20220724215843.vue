<template>
    <el-card class="box-card" shadow="hover">
        <p class="title">个人资料</p>
        <el-divider></el-divider>
        <div class="input-box">
            <div class="input-grid">
                <div>昵称:</div>
                 <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <div class="input-grid">
                <div>昵称:</div>
                 <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <div class="input-grid">
                <div>昵称:</div>
                 <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
        </div>
        
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

<style scoped>
.box-card {
    height: 600px;
    margin-top: 6px;
}
.input-grid{
    display: grid;
     grid-template-columns: 10% 88%;
    grid-gap: 2%;
    margin-bottom: 10px;
}
.title{
    padding: 0;
    margin: 10px 0 5px 10px;
    font-weight: 600;
    font-size: 18px;
}
.input-box{
    width: 70%;
    padding: 0 15% 0 15%;
}
.input-grid>div{
    line-height: 40px;
}
</style>