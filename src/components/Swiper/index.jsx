import React from "react";
import { Carousel } from 'antd';
import "./style.less"

const Swiper = (props)=>{

    const { banners } = props

    return (
        <Carousel autoplay effect="fade">
            {
                banners.map(
                    (banner,index) =>{
                    return(
                        <div className="swiperview" key={index}>
                            <img src={banner} alt="" />
                        </div>)
                    })
            }
        </Carousel>
    )
}
export default Swiper