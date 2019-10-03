<template>
    <div class="navtabbar">
        <div class="navtabbaritems" v-for="(items , indexs) in navtabbar" :key="items.index">
            <span :class="{active:indexs===tabactive}" @click="tabactives(indexs)">{{items}}</span>
        </div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            tabactive:0,
        }
    },
    methods: {
        tabactives(indexs){
            this.tabactive=indexs;
            this.$emit('tabact',indexs);
        }
    },
    props:{
        navtabbar:'',

    }
}
</script>
<style lang="scss">
    .navtabbar{
        display: flex;
        text-align: center;
        line-height: .4rem;
        height: .4rem;
        position: sticky;
        z-index: 12;
        top:.43rem;
        color:#666666 ;
        background:white;
        .navtabbaritems{
            flex: 1;
        }
        .active{
             padding: .05rem;
             color: #ee355e;
             font-weight: bold;
             border-bottom: 2px solid #ee355e;
        }

    }
</style>