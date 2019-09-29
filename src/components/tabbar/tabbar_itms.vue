<template>
    <div class="tabbar_itms" @click="actives">
        <slot name="imgs" v-if="!act"></slot>
        <slot name="imgs2" v-else></slot>
        <div :style="actstyle">
             <slot name="title"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        path:String,
        titcolor:{
            type:String,
            default:'red'
        }
    },
     data() {
             return {
                // act:false
            }
          }, 
    computed: {
        act(){
            return this.$route.path.indexOf(this.path)!==-1
        },
        actstyle(){
            return this.act?{color:this.titcolor}:{}
        }
    },         
    methods: {
        actives(){
            this.$router.push(this.path)
        }
    },
    
}
</script>
<style lang="scss">
    .tabbar_itms{
        flex: 1;
        text-align: center;
        color: rgb(129, 129, 129);
        span{
            font-weight: normal;
            font-size: .11rem;
        }
        img{
            width: .26rem;
            height: .26rem;
            margin: .03rem auto .02rem ;

        }
        // .active{
        //     color:rgb(43, 167, 18)
        // }
    }
</style>