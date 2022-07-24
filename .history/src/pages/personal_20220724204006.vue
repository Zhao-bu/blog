<template>
    <div>
        <v-header ref="vHeader" class="header"></v-header>
        <div class="v-grid">
            <div class="grid-left"></div>
            <div>

            </div>
            <div class="grid-right">
                <el-card class="box-card" shadow="hover">
                    <div>
                        <p>1</p>
                         <p>1</p>
                    </div>
                    <div>
                         <p>1</p>
                          <p>1</p>
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
}
</script>

<style scoped>
.v-grid {
    display: grid;

    grid-template-columns: 14% 62% 22%;
    grid-gap: 1%;
}
.box-card{
    margin-top: 6px;
    display: grid;
     grid-template-columns: 48% 48%;
    grid-gap: 4%;
}
</style>