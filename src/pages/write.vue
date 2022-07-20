<template>
    <div class="container">


        <div class="page-header">
            <div style="font-size:16px;color:gray"> <i class="el-icon-arrow-left"></i>返回</div>
            <div>
                <el-input placeholder="请输入内容" v-model="article.title" class="input-with-select"></el-input>
            </div>
            <div style="text-align: center;">
                <el-button type="primary" plain size="medium" @click="onSave">保存</el-button>
                <el-button type="primary" size="medium">发布</el-button>
            </div>
            <v-avatar></v-avatar>
        </div>

        <MdEditor  :content.sync="val"></MdEditor>
    </div>
</template>

</template>

<script>
// https://blog.csdn.net/qq_41463655/article/details/125340036
import vAvatar from '@/components/v-avatar';
export default {
    components: {
        vAvatar
    },
    data() {
        return {
            article:{
                title:'',
                type:''
            },
            val: '',
            vm: null
        }
    },
    computed: {
        
    },
    methods: {
        goBack() {
            console.log('go back');
        },
        onSave(){
            console.log(this.val)
        }
    }
}
</script>

<style scoped>
.page-header {
    height: 61px;
    display: grid;
    align-items: center;
    grid-template-columns: 5% 79% 10% 3%;
    grid-gap: 1%;
}
.el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>