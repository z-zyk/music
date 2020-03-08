import React, { Component } from 'react'
import axios from "axios"
import "./index.css"
export default class Singerpart extends Component {
  constructor(props){
    super(props)
    this.state ={
      obj:{},
      arr:[]
    }
  }
  getdata=()=>{
    //获取歌手页返回的歌手id
    console.log(this.props.location.state.id)
    let id=this.props.location.state.id
    axios.post("/api/music/songListById",{singermid:id}).then((res)=>
    {
      console.log(res.data.data)
      let sobj=res.data.data
      sobj.singer_mid="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+sobj.singer_mid+".jpg?max_age=2592000"
      this.setState({
        obj:sobj,
        arr:sobj.list
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
      <div className="singerpart" >
        
        <div style={{width:"375px",height:'262px'}} style={{position:"relative"}}>
          <img src={obj.singer_mid} style={{display:"block"}}/>
          <div style={{position:"absolute",top:"0",left:'0'}} className="filter">
            <span className="back" onClick={this.backClick.bind(this)}>返回</span>
          </div>
        </div>
        
        
        <div className="main">

          {
                arr.map((item,index)=>{
                  return (
                    <li key={index} onClick={this.go.bind(this,item.musicData.songmid,item.musicData.albummid,item.musicData.songname,obj.singer_name)}>
                      <h3>{item.musicData.songname}-{item.musicData.albumname}</h3>
                      <p>{obj.singer_name}</p>
                    </li>
                  )
                })
          }
        </div>
      </div>
    )
  }
}
