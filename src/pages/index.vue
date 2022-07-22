<template>
    <div>
        <v-header ref="vHeader" class="header"></v-header>
        <div class="v-grid">
            <div class="grid-left"></div>
            <div>
                <v-content :list="contentList"></v-content>
            </div>
            <div class="grid-right">
                <el-carousel height="200px" class="carousel">
                    <el-carousel-item v-for="item in 5" :key="item">
                        <!-- <h3 class="small">{{ item }}</h3> -->
                    </el-carousel-item>
                </el-carousel>
                <v-card v-for="(item, index) in cardList" :key="index"></v-card>
            </div>
        </div>
    </div>
</template>
<script>
import vHeader from "@/components/v-header";
import vContent from "@/components/v-content";
import vCard from "@/components/v-card";
export default {
    components: {
        vHeader,
        vContent,
        vCard,
    },
    data() {
        return {
            cardList: [1, 1, 1, 1, 1, 1, 1],
            carouselList: [],
            showBlog: false,
            contentList: [{
                avatar: 'https://avatars.githubusercontent.com/u/79249312?v=4',
                author: 'Zhao-bu',
                timeAgo: '1分钟前',
                coverImg: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                title: 'xxxxxxxxxx'
            }],
        };
    },
    created() {
        this.getAllBlog({bid:''})
    },
    methods: {
        changeShow(e) {
            this.showBlog = true
            console.log(e)
            this.$store.commit('setTabIndex', '2')
            this.$router.push({
                name: 'content',
                params: {
                    bid: e
                }
            })
        },
        getAllBlog(bid) {
            let that = this;
            this.$api.demo.getBlog(bid).then((res) => {
                console.log(res)
                const { code, data, message } = res;
                if (code == 200) {
                    that.contentList = data
                } else {
                    that.$message(message);
                }
            })
        },
        commit() {
            // setTabIndex
            this.$store.commit('setTabIndex', '3')
            // console.log(this.$store)
        },
        dispatch() {
            // setTabIndex
            this.$store.dispatch('setTabIndex')

        }
    }
}
</script>
<style scoped>
.page {
    height: 100vh;
}

.logImg {
    widows: 200px;
    height: 100px;
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

.carousel {
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>