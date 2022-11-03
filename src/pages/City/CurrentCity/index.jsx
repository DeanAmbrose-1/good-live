import React, { useEffect } from "react"
import { EnvironmentOutline } from "antd-mobile-icons"
import { useState } from "react"
import "./style.less"
import api from "../../../api"

const CurrentCity = ()=>{

    const [ localcity, setlocalcity] = useState("北京")

    useEffect( ()=>{
        const fetchcity = async ()=>{
                const {data} = await api.getlocalpostion() 
                // console.log(data.match(/var returnCitySN = (.*)/)[1])
                setlocalcity(
                    ()=>(data.match(/省(.*)市"}/)[1])
                )
            }
        fetchcity()
    },[])

    return (
        <div className="current-city">
            <span>当前:&nbsp;&nbsp;{localcity}</span>
            <EnvironmentOutline fontSize={20}/>
        </div>
        
    )   
}
export default CurrentCity