import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {name:"home", path:"/home", component:()=>import("@/views/home/home")},
    {name:"404", path:"/404",component:()=>import("@/views/404/404")},
    {path:"*",redirect:"/404"},
    {name:"mine",path:"/mine",component:()=>import("@/views/mine/mine")},
    {name:"car",path:"/car",component:()=>import("@/views/car/car")},
    {name:"class",path:"/class",component:()=>import("@/views/class/class")}    
  ]
})
