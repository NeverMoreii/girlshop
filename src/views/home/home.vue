<template>
  <div class="home">
      <navbar class="homenav">
          <p slot="center">购物街</p>
      </navbar>
      <homeswiper :banner="banner"></homeswiper>
      <homenav :recomend="recomend"></homenav>
      <popular></popular>
      <navtabbar :navtabbar="['流行','新款','精选']"></navtabbar>
      <div style="height:600px"></div>
  </div>
</template>
<script>
  //公共组件
   import navbar from '@/components/common/navbar/navbar'
   import navtabbar from '@/components/content/navtabbar'
  //子组件
   import homeswiper from './homechild/homeswiper'
   import homenav from './homechild/homenav'
   import popular from './homechild/popular'
   //网络请求
   import {gethomedata,gethomelist} from '@/network/home'
export default {
    components:{
      navbar,homeswiper,homenav,popular,navtabbar
    } ,
    data() {
      return {
        banner:[],
        recomend:[],
      }
    },
    created() {
      //获取数据初始化swiper插件
      this.gethomedata();
      this.gethomelist("pop",1);

    },
    methods: {
          gethomedata(){
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
          } ,
          gethomelist(type){
            gethomelist(type,page).then(res=>{
               console.log(res)               
            });
          }

    },
}      
</script>
}
</script>
<style lang="scss">
    .home{
      padding-top:.44rem; 
      .homenav{
        background:#ee355e;
        position:fixed;
        top:0;
        z-index: 10;
        width: 100%;
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
