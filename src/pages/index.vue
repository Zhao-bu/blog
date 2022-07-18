<template>
    <div>
        <vheader></vheader>
        <button @click="commit()">commit </button>
        <button @click="dispatch()">dispatch </button>
        <!-- <logbox></logbox> -->
    </div>

</template>
<script>
import logBox from "@/components/logBox";
import vheader from "@/components/vheader";
export default {
    components: {
        logbox: logBox,
        vheader,
    },
    data() {
        return {
            
        };
    },
    methods: {
        commit(){
        // setTabIndex
        this.$store.commit('setTabIndex','3')
        console.log(this.$store)
        },
        dispatch(){
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
.logImg{
    widows: 200px;
    height: 100px;
}
</style>