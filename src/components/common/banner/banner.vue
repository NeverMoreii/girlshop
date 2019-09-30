<template>
    <div class="banner swiper-container">
        <slot></slot>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .banner{
        height: 1.8rem;
        .swiper-pagination-bullet-active{
            background: #ee355e;
        }
    }
</style>