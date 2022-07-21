<template>
    <div class="container">


        <div class="page-header">
            <div style="font-size:16px;color:gray"> <i class="el-icon-arrow-left"></i>返回</div>
            <div>
                <el-input placeholder="请输入文章标题" v-model="article.title" class="input-with-select"></el-input>
            </div>
            <div style="text-align: center;">
                <el-button type="primary" plain size="medium" @click="onSave">保存</el-button>
                <el-button type="primary" size="medium" @click="onPublish">发布</el-button>
            </div>
            <v-avatar></v-avatar>
        </div>
        <!-- <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload> -->
        <MdEditor :content.sync="article.content"></MdEditor>
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
            article: {
                title: '',
                type: '测试',
                content:'',
                coverImg:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
            },
            val: '',
            vm: null
        }
    },
    computed: {
       userInfo(){
            return this.$store.state.userInfo
        },
    },
    mounted(){
        console.log(this)
        console.log(this.userInfo)
    },
    methods: {
        goBack() {
            console.log('go back');
        },
        onSave(){
            localStorage.setItem('str',this.article.content);
            this.$message('保存成功');
        },
        onPublish() {
            let that = this;
            let {content,title} = this.article;
            if(content == ''){
                that.$message('内容不能为空');
                return
            }
            if(title == ''){
                that.$message('标题不能为空');
                return
            }
            console.log(that.userInfo)
            this.article.author = this.userInfo.nickName;
            this.article.avatar = this.userInfo.avatar;
            this.article.userId = this.userInfo.id
            that.$axios({
                method: "post",//指定请求方式
                url: "http://localhost:3300/publish",
                data:that.article,
            }).then(function (res) {
                console.log(res)
                that.$message(message);
            })
            
        },
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