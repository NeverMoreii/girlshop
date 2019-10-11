<template>
  <div class="home">
      <navbar class="homenav">
          <p slot="center">购物街</p>
      </navbar>
      <scroll 
          ref="scroll"
          :probetype="3"
          @scroll="scroll"
          @pullingUp="loadmore"
          :pull-up-load=true
           >      
      <homeswiper :banner="banner"></homeswiper>
      <homenav :recomend="recomend"></homenav>
      <popular></popular>        
         <navtabbar :navtabbar="['流行','新款','精选']"  @tabact="changedata"></navtabbar>       
         <goodlist :lists="showGoods"></goodlist>
      </scroll>
      <backtop @click.native="backClick" v-show="isshow"></backtop>
  </div>
</template>
<script>
  //公共组件
   import navbar from '@/components/common/navbar/navbar'
   import navtabbar from '@/components/content/navtabbar'
   import goodlist from '@/components/content/goodlist'
   import scroll from '@/components/common/scroll/Scroll'
   import backtop from '@/components/content/backTop/BackTop'
  //子组件
   import homeswiper from './homechild/homeswiper'
   import homenav from './homechild/homenav'
   import popular from './homechild/popular'
   //网络请求
   import {gethomedata,gethomelist} from '@/network/home'
export default {
    components:{
      navbar,homeswiper,homenav,popular,navtabbar,goodlist,scroll,backtop,
    } ,
    data() {
      return {
        banner:[],
        recomend:[],
        list:{
          'pop':{num:0,goods:[]},
          'new':{num:0,goods:[]},
          'sell':{num:0,goods:[]},
        },
         currentType: 'pop',
         isshow:false,
      }
    },
     computed: {
      showGoods() {
        return this.list[this.currentType].goods
      }
    },   
    created() {
      //获取数据 初始化swiper插件
      this.gethomedata();
      this.gethomelist("pop",1);
      this.gethomelist("new",1);
      this.gethomelist("sell",1);

    },
    methods: {
      //监听事件
      changedata(indexs){
        switch (indexs) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      //获取数据
          gethomedata(){
            gethomedata().then(res=>{
              this.banner=res.data.banner.list;
              this.recomend=res.data.recommend.list;
              this.$nextTick(()=>{
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
            const goodspage=this.list[type].num+1           
            gethomelist(type,goodspage).then(res=>{
               this.list[type].goods.push(...res.data.list) 
               this.list[type].num+=1  
               this.$refs.scroll.finishPullUp()   
            });
          },
          backClick() {
            //  this.$refs.scroll.scrollTo(0, 0)
            // this.$refs.scroll.scroll.scrollTo(0,0,500)
            this.$refs.scroll.scrollTo(0,0,500)
         },
         scroll(position){
           if(position.y<-2000){
             this.isshow=true
           }else{
             this.isshow=false
           }
         },
         loadmore(){
           this.gethomelist(this.currentType)
           console.log("上拉加载")
         }

    },
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
        p{
          flex: 1;
        }
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
    .wrapper{
      height: 4.81rem;
    }
</style>
