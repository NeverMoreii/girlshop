<template>
    <div class="detail">
        <navbar>
            <div slot="center"
             v-for="(tit ,index) in title" 
             :key="tit"
             class="navlist"
             :class="{actives:activ==index}"
             @click="actives(index)"
             >
                    <p>{{tit}}</p>
             </div>
        </navbar>
        <banner>
            <banneritem class="swiper-wrapper">
                <div class="swiper-slide"
                    v-for="items in detailbanner"
                    :key="items"
                    slot="img"
                >
                        <img :src="items">
                </div>
            </banneritem>
        </banner>
    </div>
    
</template>
<script>
import {getdetail} from '@/network/detail'
import banner from '@/components/common/banner/banner'
import navbar from '@/components/common/navbar/navbar'
import banneritem from '@/components/common/banner/banneritem'
export default {
    components:{
        banner,banneritem,navbar
    },
    data() {
        return {
           iid:null,
           detailbanner:[],
           title:["商品",'参数','评论','详情'],
           activ:0
        }
    },
    methods: {
        actives(index){
                  this.activ=index
        }
    },
     created() {
        this.iid=this.$route.params.iid
         getdetail(this.iid).then(res=>{
             this.detailbanner=res.result.itemInfo.topImages
              this.$nextTick(()=>{
                  var swiper = new Swiper('.swiper-container', {
                    autoplay:true,
                    pagination: {
                      el: '.swiper-pagination',
                      dynamicBullets: true,
                      
                    },
                  });       
              })              
        })
    },      
}
</script>
<style scoped lang="scss">
        .detail{
                .navbar{
                    .navlist{
                        flex: 1;
                        color:#3b3b3b;
                        font-size: .14rem;
                    }
                }
                img{
                    width: 100%;
                }
                .actives{
                     color: red!important;
                 }
        }       
</style>