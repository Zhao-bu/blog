<template>
  <div>
    <el-card class="box-card"  shadow="hover">
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'vCard',
  data() {
    return {
      msg: ''
    }
  }
}
</script>
<style scoped>
.box-card {
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>
