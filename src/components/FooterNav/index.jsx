import React from "react";
import { NavLink } from "react-router-dom";
import "./style.less"

const FooterNav = ()=>{



    return (
        <div className="nav-footer">
            <ul className="clear-fix">
                <li>
                    <NavLink  to="/">
                        <i className="iconfont icon-home"></i>
                        <span>首页</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink  to="/lifeservice">
                        <i className="iconfont icon-trophy"></i>
                        <span>生活服务</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink  to="/shop">
                        <i className="iconfont icon-shop"></i>
                        <span>商城</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink  to="/user">
                        <i className="iconfont icon-team"></i>
                        <span>我的</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default FooterNav