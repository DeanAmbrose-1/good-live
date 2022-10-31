import React from "react";
import "./style.less"
import api from "../../../api"
import { useEffect , useState , useCallback} from "react";
import { IndexBar, List } from "antd-mobile";

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

    function creatcitylist() {
        
        const { citylist } = cityinof
        return (
            <IndexBar>
                {
                    Object.keys(citylist).map(
                        (letter,index) => {
                            const cl = citylist[letter]
                            return (
                                <IndexBar.Panel
                                index = { letter }
                                title = { letter }
                                key = { index }
                                >
                                <List>
                                {
                                    cl.map(
                                        (cname,index) => (
                                            <List.Item key={index}> {cname} </List.Item>
                                        )
                                    )
                                }
                                </List> 
                                </IndexBar.Panel>                   
                            )
                        }
                    )
                }
            </IndexBar>
        )
    }    


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
           <div className="cl">
            {
                creatcitylist()
            }
           </div>
        </div>
    )
}

export default CityList