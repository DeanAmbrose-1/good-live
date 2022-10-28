const express = require("express")
const homehot = require("./data/home/homehot")
const citylist = require("./data/city/citylist")
const hotcity = require("./data/city/hotcity")
const router = express.Router()

/**
 * 首页数据
 */
router.get("/home/hot1",(req,res)=>{
    res.send({
        status:200,
        result:homehot.hot1
    })
})

router.get("/home/hot2",(req,res)=>{
    res.send({
        status:200,
        result:homehot.hot2
    })
})

/**
 * 全国城市列表
 */
router.get("/city/citylist",(req,res)=>{
    res.send({
        status:200,
        result:citylist.citylist
    })
})

/**
 * 热门城市列表
 */
 router.get("/city/hotcity",(req,res)=>{
    res.send({
        status:200,
        result:hotcity.hotcity
    })
})

module.exports = router