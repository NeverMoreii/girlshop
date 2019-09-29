<template>
     <tabbar>
            <tabbaritms path="/home" titcolor="rgb(43, 167, 18)">   
                    <img slot="imgs" src="@/assets/images/tabbar/ic_tab_home_normal.png" >
                    <img slot="imgs2" src="@/assets/images/tabbar/ic_tab_home_active.png" >
                    <span slot="title">首页</span>    
            </tabbaritms>
            <tabbaritms path="/class" titcolor="rgb(43, 167, 18)">   
                    <img slot="imgs" src="@/assets/images/tabbar/ic_tab_broadcast_normal.png" >
                    <img slot="imgs2" src="@/assets/images/tabbar/ic_tab_broadcast_active.png" >
                    <span slot="title">分类</span>    
            </tabbaritms>
            <tabbaritms path="/car" titcolor="rgb(43, 167, 18)">   
                    <img slot="imgs" src="@/assets/images/tabbar/ic_tab_broadcast_normal.png" >
                    <img slot="imgs2" src="@/assets/images/tabbar/ic_tab_broadcast_active.png" >
                    <span slot="title">购物车</span>    
            </tabbaritms>
            <tabbaritms path="/mine" titcolor="rgb(43, 167, 18)">   
                    <img slot="imgs" src="@/assets/images/tabbar/ic_tab_mine_normal.png" >
                    <img slot="imgs2" src="@/assets/images/tabbar/ic_tab_mine_active.png" >
                    <span slot="title">我的</span>    
            </tabbaritms>                                           
        </tabbar>  
</template>
<script>
    import tabbar from'@/components/common/tabbar/tabbar'
    import tabbaritms from'@/components/common/tabbar/tabbar_itms'
export default {
        components:{
            tabbar,tabbaritms,
        }    
}
</script>
<style >

</style>