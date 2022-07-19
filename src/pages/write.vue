<template>
    <div class="container">
         <MdEditor  :content.sync="val"></MdEditor>
    </div>
</template>

</template>

<script>
// https://blog.csdn.net/qq_41463655/article/details/125340036
export default {
    components:{
      
    },
    data(){
        return{
            val: '',
            vm:null
        }
    },
    computed:{

    },
    methods:{
         
    }
}
</script>

<style>

</style>