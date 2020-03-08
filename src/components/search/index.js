import React, { Component } from 'react'
import "./index.css"
import axios from "axios"

export default class Search extends Component {

  sou=(e)=>{
    console.log(e.target.value)
    // axios.post("/api/music/search",{kw:e.target.value}).then((res)=>{
    //   console.log(res)
    // })
    // axios.get("/api/music/getRecommendList").then((res)=>{console.log(res)})
  }
  componentDidMount(){

  }

  render() {
    return (
      <div className="search">
        <div >
            <div className="main">
              <input  type="text" ref="node" placeholder="搜索歌曲，歌手" onChange={(e)=>this.sou(e)}/>
            </div>
        </div>
      </div>
    )
  }
}
