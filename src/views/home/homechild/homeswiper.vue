<template>
      <banner>
          <banneritem class="swiper-wrapper">
              <div class="swiper-slide"
                 v-for="banneritems in banner"
                :key="banneritems.title"
                slot="img"
              >
              <a :href="banneritems.link"><img :src="banneritems.image"></a>   
              </div>
          </banneritem>
      </banner>  
</template>
<script>
   import banner from '@/components/common/banner/banner'
   import banneritem from '@/components/common/banner/banneritem'
  export default {
    components:{
      banner,banneritem
    },
    props:{
      banner
    }
  }
</script>