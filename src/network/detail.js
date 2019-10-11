import { request } from "./request"
export function getdetail(iid) {
    return request({
         url:"/detail",
         params:{
            iid
        }
    })
}
export function gethomelist(type,page) {
    return request({
         url:"/detail",
         params:{
             type,
             page
         }
    })
}