<template>
<div>
 <v-header></v-header>
 <div class="v-grid">
        <div class="grid-left"></div>
        <div>
            <h1 class="title">11111</h1>
            <p>2022</p>
            <vue-markdown  :source="msg"></vue-markdown>
        </div>
            
        <div class="grid-right">
            <v-card v-for="(item, index) in cardList" :key="index"></v-card>
        </div>
    </div>
</div>
   
</template>

<script>
import vHeader from "@/components/v-header";
import vCard from "@/components/v-card";
import VueMarkdown from 'vue-markdown';
import 'highlight.js/styles/github.css'
import 'github-markdown-css';
export default {
   components: {
        vHeader,
         vCard,
         VueMarkdown
    },
    data(){
        return{
            cardList: [1, 1, 1, 1, 1, 1, 1],
            value:'',
            msg:""
        }
    },
    created(){
        this.msg = localStorage.getItem('str')
    }
}
</script>

<style>
.page {
    height: 100vh;
}

.logImg {
    widows: 200px;
    height: 100px;
}
.text{
    font-size: 14px;
    height: 24px;
    line-height: 24px;
}
.v-grid {
    display: grid;

    grid-template-columns: 14% 62% 22%;
    grid-gap: 1%;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .carousel{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .title{
    font-size: 32px;
  }
</style>