<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  lang="scss">
    .navbar{
        display: flex;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        color: white;
        font-size: .17rem;
        .left{
            width: .6rem
        }
        .center{
            flex: 1;
        }
        .right{
            width: .6rem;
        }
    }
</style>