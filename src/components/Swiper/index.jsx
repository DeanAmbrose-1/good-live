import React from "react";
import {Swiper} from "antd-mobile"
import "./style.less"

const SwiperComponent = (props)=>{

    const { banners } = props

    const items = banners.map((banner,index) => (
        <Swiper.Item key={index}>
            <div className="swiperview" >
                <img src={banner} alt="" />
            </div>
        </Swiper.Item>
    )
    )


    return (
            <Swiper loop autoplay>{items}</Swiper>
    )
}
export default SwiperComponent