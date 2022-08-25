import React from "react";
import { Carousel } from 'antd';
import banner1 from"../../assets/images/banner1.png"
import banner2 from"../../assets/images/banner2.png"
import banner3 from"../../assets/images/banner3.png"
import "./style.less"

const Swiper = ()=>{

    return (
        <Carousel autoplay >
            <div className="swiperview">
                <img src={banner1} alt="" />
            </div>
            <div className="swiperview">
                <img src={banner2} alt=""/>
            </div>
           <div className="swiperview">
                <img src={banner3} alt=""/>
            </div>
        </Carousel>
    )
}
export default Swiper