import React from "react";
import "./style.less"
import api from "../../../api"
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

const CityList = ()=>{

    const {getcountycitylist,gethotcitylist} = api

    const [cityinof,setcityinof] = useState({citylist:{},hotcity:[]})

    const allget_city = useCallback(
        async () =>{
            const [{data:{result:citylist}}, {data:{result:hotcity}}] = await Promise.all([
                getcountycitylist(),gethotcitylist()
            ])

            setcityinof(
                ()=>({
                    citylist,
                    hotcity
                })
            )
        },[getcountycitylist,gethotcitylist]
    )

    useEffect(
        () => {
            allget_city()    
        },[allget_city]
    )
            console.log(cityinof)

    return (
        <div className="city-list-container">
           <h3>热门城市</h3> 
           <ul className="clear-fix">
            {
                cityinof.hotcity.length >0 ? cityinof.hotcity.map(
                    (cityname,index) => {
                        
                    return (<li key={index}><span>{cityname}</span></li>)     
                }) : <span>暂无数据</span>
            }           
           </ul>
          
        </div>
    )
}

export default CityList