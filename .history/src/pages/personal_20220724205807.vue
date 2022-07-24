<template>
    <div>
        <v-header ref="vHeader" class="header"></v-header>
        <div class="v-grid">
            <div class="grid-left"></div>
            <div>
                <el-card class="box-card-one" shadow="hover">
                    <div class="card1">
                        <div class="v-grid-one">
                             <div class="avatar"><el-avatar :size="85" :src="circleUrl"></el-avatar></div>
                             <div>11</div>
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="grid-right">
                <el-card class="box-card-two" shadow="hover">
                    <div class="v-grid-two">
                        <div>
                            <p>关注了</p>
                            <p class="font-number">1</p>
                        </div>
                        <div>
                            <p>关注者</p>
                            <p class="font-number">1</p>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from "@/components/v-header";
export default {
    components: {
        vHeader,
    },
    data(){
        return{
            circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
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
.v-grid-one{
    display: grid;

    grid-template-columns: 20% 48% 30%;
    grid-gap: 1%;
}
.v-grid-one>.avatar{
    text-align: center;
    height: 100%;
    margin-top: 20px;
}
.box-card-one{
     margin-top: 6px;
    height: 200px;
    /* background: skyblue; */
}
.box-card-two {
    margin-top: 6px;
    
}
.v-grid-two{
display: grid;
    grid-template-columns: 48% 48%;
    grid-gap: 4%;
    text-align: center;
    padding: 10px 30px;
}

.font-number{
    font-size: 18px;
     margin: 2px 4px;
}
.card1{
    height:180px;
    padding:10px;
    align-items: center;
}
</style>