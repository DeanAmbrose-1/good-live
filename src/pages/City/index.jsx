import React from "react";
import PubHeader from "../../components/PubHeader";
import CityList from "./CityList";
import CurrentCity from "./CurrentCity";
const City = ()=>{
    return (
        <div>
            <PubHeader title="城市选择"/>
            <CurrentCity/>
            <CityList/>
        </div>
    )
}

export default City