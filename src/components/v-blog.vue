<template>
    <div>
        <!-- <el-tag>
            <i class="el-icon-arrow-left"></i> 返回
        </el-tag> -->
        <h1 class="title">{{blog.title}}</h1>
        <p>{{ new Date(parseInt(blog.timeStamp)).toLocaleString()}}</p>
        <vue-markdown :source="blog.content"></vue-markdown>
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
  props: {
    blog: {
      type: Object, //类型
      required: true, //必要性
      default: {} //默认值
    }
  },
    data() {
        return {
            value: '',
            msg: "",
        }
    },
    methods:{
       
}
}
</script>

<style scoped>
.title {
    font-size: 32px;
}
</style>