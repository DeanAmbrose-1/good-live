import React, { useEffect, useState } from "react"
import api from "../../../api"
import HomeHotView from "../HomeHotView"

const HomeHotList = () =>{

    const [ Hot1List,setHot1List ] = useState([])
    const [ Hot2List,setHot2List ] = useState([])

    useEffect(()=>{
        api.getHomtHot1().then(
            res => {
                if(res.data.status === 200){
                    setHot1List(res.data.result)
                }
            }
        )
        api.getHomtHot2().then(
            res => {
                if(res.data.status === 200){
                    setHot2List(res.data.result)
                }
            }
        )
    },[])

    return(
        <div>
            {
                Hot1List.length > 0 ?
                <HomeHotView data = { Hot1List } title = {'热门商品'}/> :
                <div>数据等待加载</div>
            }
            {
                Hot2List.length > 0 ?
                <HomeHotView data = { Hot2List } title = {'新品推荐'}/> :
                <div>数据等待加载</div>
            }
        </div>
    )
}

export default HomeHotList