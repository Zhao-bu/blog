<template>
  <div>
    <el-card class="box-card"  shadow="hover">
      <div class="avatar">
        <el-avatar size="small" :src="avatar"></el-avatar>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'vAuthorCard',
  data() {
    return {
      msg: '',
      avatar:'https://avatars.githubusercontent.com/u/79249312?v=4',
    }
  }
}
</script>
<style scoped>
.box-card {
    margin-top: 5px;
    margin-bottom: 5px;
}
.avatar{
  width: 100%;
  text-align: center;
}
</style>
