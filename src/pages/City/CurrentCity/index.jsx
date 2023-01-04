import React, { useEffect } from "react"
import { EnvironmentOutline } from "antd-mobile-icons"
import { SpinLoading } from 'antd-mobile'
import { useState } from "react"
import "./style.less"
import api from "../../../api"

const CurrentCity = ()=>{

    const [ localcity, setlocalcity] = useState(<SpinLoading color='primary' style={{ '--size': '20px' }}/>)
    const fetchcity = async ()=>{
        try {
            const {data:{address}} = await api.getlocalpostion()
            setlocalcity(()=>{
                return address.match(/省\|(.*)市/)[1]   
            })
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
        setlocalcity(()=>(<SpinLoading color='primary' style={{ '--size': '20px' }}/>))
        setTimeout(() => {
            fetchcity()
        }, 1000);
    }

    return (
        <div className="current-city">
            <span style={{display:"inline-flex"}}>当前:&nbsp;&nbsp;{localcity}</span>
            <span className="relocal float-right " onClick={relocate} >重新定位 </span>
            <EnvironmentOutline fontSize={20} className="float-right" color="#ff5555"/>
        </div>
        
    )   
}
export default CurrentCity