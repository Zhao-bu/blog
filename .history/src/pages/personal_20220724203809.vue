<template>
    <div>
        <v-header ref="vHeader" class="header"></v-header>
        <div class="v-grid">
            <div class="grid-left"></div>
            <div>

            </div>
            <div class="grid-right">
                <el-card class="box-card" shadow="hover">
                    <div v-for="o in 4" :key="o" class="text item">
                        {{ '列表内容 ' + o }}
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
    margin-top: 10px;
}
</style>