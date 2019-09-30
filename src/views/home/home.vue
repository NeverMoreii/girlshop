<template>
  <div class="home">
      <navbar class="homenav">
          <p slot="center">购物街</p>
      </navbar>
      <homeswiper :banner="banner"></homeswiper>
      <homenav :recomend="recomend"></homenav>
  </div>
</template>
<script>
   import navbar from '@/components/common/navbar/navbar'
   import {gethomedata} from '@/network/home'
   import homeswiper from './homechild/homeswiper'
   import homenav from './homechild/homenav'
export default {
    components:{
      navbar,homeswiper,homenav
    } ,
    data() {
      return {
        banner:[],
        recomend:[],
      }
    },
    created() {
      //获取数据初始化swiper插件
      gethomedata().then(res=>{
        this.banner=res.data.banner.list;
        this.recomend=res.data.recommend.list;
        this.$nextTick(()=>{
                  console.log(res);
            var swiper = new Swiper('.swiper-container', {
              autoplay:true,
              pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                
              },
            });       
        })                
      });

    }
}      
</script>
}
</script>
<style lang="scss">
    .home{
      .homenav{
        background:#ee355e
      }
      .swiper-slide{
        img{
          width: 100%;
          height: 1.8rem;
        }
      }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }      
    }
</style>
