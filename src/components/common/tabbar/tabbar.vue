<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .tabbar{
        height:.52rem;
        background:rgb(245, 245, 245);
        position: fixed;
        z-index: 10000;
        bottom: 0;
        width:100%;
        border-top: 1px solid #e7e7e7;
         display: flex;
    }
</style>