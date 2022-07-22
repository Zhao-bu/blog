<template>
  <div class="v-content">
    <el-card class="box-card" v-for="(item, index) in arrList" :key="index" shadow="hover">
      <div @click="showBlog(item.bid)">
        <div class="header">
          <el-avatar size="small" :src="item.avatar"></el-avatar>
          <span class="content-author">{{ item.author }}</span>
          <span class="content-time">{{ item.timeAgo }}</span>
        </div>
        <img :src="item.coverImg" class="content-img">
        <div class="content-bottom">
          <span class="content-title">{{ item.title }}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'vContent',
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      pic: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    }
  },
  props: {
    list: {
      type: Array, //类型
      required: true, //必要性
      default: [] //默认值
    }
  },
  computed: {
    arrList(){
      this.list.forEach(item=>{
        item.timeAgo = this.reformTime(item.timeStamp)
      })
      return this.list
    }
  },
  mounted(){
    console.log(this,this.list)
  },
  methods: {
    showBlog(bid) {
      this.$parent.changeShow(bid)
    },
    reformTime(e) {
      const now = Date.now();
      let timeDiff = now - parseInt(e);  // 时间差的毫秒数
      let days = Math.floor(timeDiff / (24 * 3600 * 1000)); // 计算出天数
      let leavel1 = timeDiff % (24 * 3600 * 1000); // 计算天数后剩余的时间
      let hours = Math.floor(leavel1 / (3600 * 1000)); // 计算天数后剩余的小时数
      let leavel2 = timeDiff % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
      let minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数

      if (days > 0 && days < 30) {
        return days + '天前'
      }
      if (days >= 30 && days < 365) {
        return parseInt(days / 30) + '个月前'
      }
      if (days >= 365) {
        return parseInt(days / 365) + '年前'
      }
      if (days == 0 && hours > 0) {
        return hours + '小时前'
      }
      if (days == 0 && hours == 0 && minutes > 0) {
        return minutes + '分钟前'
      }
    }
  }
}
</script>

<style scoped>
.box-card {
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 8px;
  height: 300px;
}

.el-card__header {
  padding: 8px 6px;
}

.content-time {
  color: gray;
  text-align: right;
}

.header {
  display: grid;
  grid-template-columns: 9% 60% 29%;
  grid-gap: 1%;
  line-height: 28px;
  margin: 5px 0;
}

.v-content {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-gap: 2%;
}

.content-author {
  color: #409EFF;
  font-size: 14px;
}

.content-bottom {
  height: 75px;
  padding: 8px 6px;
}

.content-img {
  height: 175px;
  display: block;
  width: 100%;
}

.content-title {
  font-size: 16px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

}
</style>
