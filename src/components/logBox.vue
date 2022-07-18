<template>
  <div class="box">
    <el-link type="primary" style="font-size: 16px;padding: 0 10px;">{{title}}</el-link>
    <div class="text">{{content}}</div>
    <div class="footer">
    <el-link type="primary" style="padding: 0 10px;">{{author}}</el-link>
    </div>
     <el-divider></el-divider>
  </div>
</template>

<script>
export default {
    name:'logBox',
     data () {
    return {
      title: '文章标题',
      content:'文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容',
      author:'eric'
    }
  }
}
</script>

<style scoped>
    .box{
        height: 100px;
    }
    .text{
        font-size: 14px;
        padding: 10px;
    }
    .footer{

    }
</style>