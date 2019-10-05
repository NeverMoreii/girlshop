<template>
  <div class="mine"> 
      <ul class="mine2">
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>                        
      </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        bscroll:null,
      }
    },
    created() {  
        this.$nextTick(()=>{
           this.bscroll=new BScroll(document.querySelector('.mine'),{
             probeType:3,
             pullUpLoad:true
           })
           this.bscroll.on('pullingUp',()=>{
              console.log("上拉加载");
              this.bscroll.finishPullUp()
           })
        })     
    },
  }
</script>
<style lang="scss">
    .mine{
        height: 2rem;
        border: red solid 1px;
    }
</style>
