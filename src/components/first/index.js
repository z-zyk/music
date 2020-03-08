import React, { Component } from 'react'
import axios from "axios"
import "./index.css"

export default class First extends Component {
  constructor(props){
    super(props)
    this.state ={
        list:[{
          src:"http://p.qpic.cn/music_cover/Y9V3tAZvgQMVNK2WeMZic7psS7y4ue4HUqrn9EK1n8AvKXJkg4AzPsA/600?n=1",
          dissname:"英文电子：请让我自嗨一会儿吧",
          creatorname:"小众也有好听的歌"

        }],
        list1:[]
    }
  }
  getData(){
    console.log(1)
    axios.get("/api/music/getRecommendList").then((res)=>{
      console.log(res.data.data.list)
      let nlist=res.data.data.list
      this.setState({
        list1:nlist
      })
    console.log(this.state.list1)
    })
    
    
    
}
componentDidMount(){  
  this.getData() 
  // axios.get("/api/music/getBanner").then((res)=>{console.log(res)})
}
  render() {
    let list=this.state.list1
    console.log(list)
    
    return (
     

     <div className="tuijian" style={{height:"579px"}}>

        <div style={{height:"44px",lineHeight:"44px",color:"#ffcd32",textAlign:"center"}}>热门歌单推荐</div>
        <ul style={{height:"535px",overflow:"auto"}}>
          {
            list.map((item)=>{
              return  (
                <li key={item.dissid} className="first">
                  <div  className="left">
                    <img src={item.imgurl} />
                  </div>
                  <div className="right">
                      <p className="s">{item.dissname}</p>
                      <p className="x">{item.creator.name}</p>
                  </div>
                </li>
              )
            })
          }
          

        </ul>
      </div> 


    )
  }
}
