import React, { Component } from 'react'
import {routes} from "../../router"
import {Route,Redirect,NavLink} from "react-router-dom"
import Singer from "../singer"
export default class One extends Component {
  render() {
    return (
      <div>
        <div>
          <header style={{textAlign:"center",height:"44px",lineHeight:"44px",background:"#222222",color:"#fff"}}>
          <span>Music</span>
          <span className="iconfont icon-wode" style={{height:"44px",width:"44px"}}></span>
          </header>
        </div>
      
        <div className="nav">
          <span><NavLink to="/music/recommend"><span>推荐</span></NavLink></span>
           <span><NavLink to="/music/singer"><span>歌手</span></NavLink></span>
          <span><NavLink to="/music/rank"><span>排行榜</span></NavLink></span>
          <span><NavLink to="/music/search"><span>搜索</span></NavLink></span>
         </div>
        
         {
        routes.map((item)=>{
          return <Route key={item.path}  path={item.path} component={item.component} exact/>
        })
        }
        <Route  path="/music/sing" component={Singer} exact/>
        
      </div>
      
    )
  }
}
