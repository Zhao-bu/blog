<template>
  <div>
    <el-card class="box-card"  shadow="hover">
      <div class="avatar">
        <el-avatar size="large" :src="avatar"></el-avatar>
        <p>Zhao-bu</p>
        <div class="v-grid">
          <p>10</p><p>10</p><p>10</p>
          <p>文章</p><p>获赞</p><p>收藏</p>
        </div>
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
.v-grid{
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 5%;
  /* height: 100px; */
}
.v-grid >p {
  padding: ;
}
</style>
