import React, { useEffect } from "react"
import { EnvironmentOutline } from "antd-mobile-icons"
import { SpinLoading } from 'antd-mobile'
import { useState } from "react"
import "./style.less"
import api from "../../../api"

const CurrentCity = ()=>{

    const [ localcity, setlocalcity] = useState("定位中")
    const fetchcity = async ()=>{
        try {
            const {data} = await api.getlocalpostion()
            setlocalcity(()=>(data.match(/省(.*)市"}/)[1]))
        }catch(err){
            console.log(err)
            setlocalcity(()=>("定位失败"))
        }
    }
        

    useEffect( ()=>{
        
        fetchcity()
    },[])

    function relocate(){
        console.log("重新定位")
        setlocalcity(()=>(<SpinLoading color='primary' style={{display:"inline"}}/>))
        fetchcity()
    }

    return (
        <div className="current-city">
            <span>当前:&nbsp;&nbsp;{localcity}</span>
            <span className="float-right" onClick={relocate}>重新定位 </span>
            <EnvironmentOutline fontSize={20} className="float-right"/>
        </div>
        
    )   
}
export default CurrentCity