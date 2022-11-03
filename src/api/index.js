import axios from "../untils/request"
/**
 * 路径地址
 */
const base = {
    baseUrl:"http://localhost:5566",
    homehot1:"/api/home/hot1",
    homehot2:"/api/home/hot2",
    citylist:"/api/city/citylist",
    hotcity:"/api/city/hotcity"
}
/**
 * api地址
 */
const freeapi = {
    localpostion :"/api1/cityjson"
}

/**
 * 请求方法
 */
const api = {
    /**
     * 获取首页热门产品1
     */
    getHomtHot1(){
        return axios.get(base.baseUrl + base.homehot1)
    },
    getHomtHot2(){
        return axios.get(base.baseUrl + base.homehot2)
    },

    /**
     * 获取全国城市列表
     */

    getcountycitylist(){
        return axios.get(base.baseUrl + base.citylist)
    },

    /**
     * 获取热门城市列表
     */

    gethotcitylist(){
        return axios.get(base.baseUrl + base.hotcity)
    },

    /**
     * 获取当前城市定位
     */
    getlocalpostion(){
        return axios.get(freeapi.localpostion)
    }
}

export default api;