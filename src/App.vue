<template>
  <div id="app">
    <maintabbar></maintabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import maintabbar from'@/components/content/main_tabbar'
  export default {
        components:{
            maintabbar
        }
  }
</script>
<style lang="scss">


</style>
