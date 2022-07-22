<template>
<div>
 <v-header></v-header>
 <div class="v-grid">
        <div class="grid-left">
             <v-author-card :info="authorInfo"></v-author-card>
        </div>
        <div>
            <v-blog :blog="thisBlog" ></v-blog>
        </div>
        <div class="grid-right">
            <v-card v-for="(item, index) in cardList" :key="index"></v-card>
        </div>
    </div>
</div>
   
</template>

<script>
import vAuthorCard from "@/components/v-author-card";
import vBlog from "@/components/v-blog"
import vHeader from "@/components/v-header";
import vCard from "@/components/v-card";
export default {
   components: {
        vHeader,
        vCard,
        vBlog,
        vAuthorCard
    },
    data(){
        return{
            cardList: [1, 1, 1, 1, 1, 1, 1],
            value:'',
            msg:"",
            thisBlog:{},
            authorInfo:{}
        }
    },
    created(){
        console.log(this.$route.params);
        this.getAllBlog(this.$route.params)
        // this.msg = localStorage.getItem('str')
    },
    methods:{
         getAllBlog(params) {
            let that = this;
            this.$api.demo.getBlog(params).then((res) => {
                console.log(res)
                const { code, data, message } = res;
                if (code == 200) {
                    that.thisBlog = data[0]
                    that.getUser(that.thisBlog.userId)
                } else {
                    that.$message(message);
                }
            })
        },
        getUser(e){
            let that = this;
            this.$api.demo.getUser({userId:e}).then((res) => {
                console.log(res)
                const { code, data, message } = res;
                if (code == 200) {
                    that.authorInfo = data
                } else {
                    that.$message(message);
                }
            })
        }
    }
}
</script>

<style scoped>
.v-grid {
    display: grid;

    grid-template-columns: 14% 62% 22%;
    grid-gap: 1%;
}
</style>