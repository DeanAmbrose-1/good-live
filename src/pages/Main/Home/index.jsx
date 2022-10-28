import React from "react";
import HeaderNav from "../../../components/HeaderNav"
import SwiperComponent from "../../../components/Swiper"
import banner1 from"../../../assets/images/banner1.png"
import banner2 from"../../../assets/images/banner2.png"
import banner3 from"../../../assets/images/banner3.png"
import HomeHotList from "./HomeHotList";

const Home = ()=>{
    return (
        <div>
            <HeaderNav/>
            <SwiperComponent banners={[banner1,banner2,banner3]}/>
            <HomeHotList/>
        </div>
    )
}
export default Home