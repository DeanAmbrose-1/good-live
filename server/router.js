const express = require("express")
const homehot = require("./data/home/homehot")
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


module.exports = router