<template>
    <div class="goodlist">
        <googlistitem v-for="goods in lists[0]" :key="goods.iid"  :goods="goods"></googlistitem>
    </div>
</template>
<script>
 import googlistitem from "@/components/content/goodlistitem"
export default {
    components:{
        googlistitem
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