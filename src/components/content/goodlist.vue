<template>
    <div class="goodlist">
        <googlistitem v-for="goods in lists"  :key="goods.id"  :goods="goods"></googlistitem>
    </div>
</template>
<script>
 import googlistitem from "@/components/content/goodlistitem"
export default {
    components:{
        googlistitem //注释
    },
    props: {
      lists: {
        type: Array,
        default() {
          return []
        }
      }
    },
}
</script>
<style lang="scss">
    .goodlist{
      display: flex;
      flex-wrap: wrap;
       justify-content: space-around;
       padding: 2px;
    }
</style>