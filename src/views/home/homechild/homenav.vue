<template>
    <div class="homnav">
        <div class="box" v-for="item in recomend" :key="item.acm">
            <a  :href="item.link"><img :src="item.image"></a>
            <p>{{item.title}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        recomend:{
            type:Array,
            default(){
                return []
            }
        }
    }
    
}
</script>
<style lang="scss">
    .homnav{
        display: flex;
        margin-top: .12rem;
        font-size: .12rem;
        color: #666;
        .box{
            flex: 1;
            text-align: center;
            line-height: .3rem;
            margin: .05rem;
            img{
                width: 100%;
            }
        }
    }
</style>