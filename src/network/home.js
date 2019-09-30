import { request } from "./request"
export function gethomedata() {
    return request({
         url:"/home/multidata"
    })
}
export function gethomelist(type,page) {
    return request({
         url:"/home/data",
         params:{
             type,
             page
         }
    })
}