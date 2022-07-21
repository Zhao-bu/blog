<template>
    <div>
        <el-tag>
            <i class="el-icon-arrow-left"></i> 返回
        </el-tag>
        <h1 class="title">11111</h1>
        <p>2022</p>
        <vue-markdown :source="msg"></vue-markdown>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import 'highlight.js/styles/github.css'
import 'github-markdown-css';
export default {
    name:'vBlog',
    components: {
        VueMarkdown
    },
    data() {
        return {
            value: '',
            msg: ""
        }
    },
    created() {
        this.msg = localStorage.getItem('str')
    }
}
</script>

<style scoped>
.title {
    font-size: 32px;
}
</style>