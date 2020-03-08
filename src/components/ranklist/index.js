import React, { Component } from 'react'
import axios from "axios"
import "./index.css"
export default class Singerpart extends Component {
  constructor(props){
    super(props)
    this.state ={
      obj:{},
      arr:[],

    }
  }
  getdata=()=>{
    console.log(this.props.location.state.id)
     let id=this.props.location.state.id
    axios.post("/api/music/rankSongList",{topid:id}).then((res)=>
    {
      console.log(res)
      console.log(res.data.topinfo.ListName)
      console.log(res.data.songlist)

      console.log(res.data.songlist[0].data.albummid)

      this.setState({
        obj:{...this.state.obj,name:res.data.topinfo.ListName,url:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+res.data.songlist[0].data.albummid+".jpg?max_age=2592000"},
        arr:res.data.songlist
      })

    })
  }
  //后退
  backClick(){
    this.props.history.go(-1)
}
//进入播放页，传递歌曲id，和图片地址两个参数
go=(a,b,c,d)=>{
  this.props.history.push('/musicplay',{
    id:a,
    imgurl:b,
    songn:c,
    singn:d
  })
}
  componentDidMount(){
    this.getdata()
  
  }
  render() {
    let obj=this.state.obj
    let arr=this.state.arr
    console.log(obj)
    console.log(arr)

    return (
      <div className="ranklist" >
        <div style={{width:"375px",height:'262px'}} style={{position:"relative"}}>
          <img src={obj.url} style={{display:"block"}}/>
          <div style={{position:"absolute",top:"0",left:'0'}} className="filter">
            <span className="back" onClick={this.backClick.bind(this)}>返回</span>
            <span className="title">{obj.name}</span>
          </div>
        </div>
        
         
        <div className="main">

          {
                arr.map((item,index)=>{
                  return (
                    <li key={index} onClick={this.go.bind(this,item.data.songmid,item.data.albummid,item.data.songname,item.data.singer[0].name)}>
                      <h3>{index+1}.{item.data.songname}</h3>
                      <p>{item.data.singer[0].name}-{item.data.albumname}</p>
                    </li>
                  )
                })
          }
          
        </div> 
      </div>
    )
  }
}
