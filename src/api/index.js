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
    }
}

export default api;