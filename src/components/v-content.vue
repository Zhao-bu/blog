<template>
  <div class="v-content">
    <el-card class="box-card" v-for="(item,index) in contentList" :key="index" shadow="hover">
      <div slot="header" class="clearfix">
        <span class="content-title">卡片名称</span>
      </div>
      <div v-for="o in 3" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'vContent',
  data() {
    return {
      contentList: [1,1,1,1,1,1,1,1,1,1]
    }
  }
}
</script>

<style scoped>
.box-card{
  margin-top: 5px;
  margin-bottom: 5px;
}
.content-title{
  color: #409EFF;
  font-size: 16px;
}
</style>
