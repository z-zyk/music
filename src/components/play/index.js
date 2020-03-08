import React, { Component } from 'react'
import axios from "axios"
import "./index.css"
export default class Play extends Component {
  constructor(props){
    super(props)
    this.state ={
      song:{url:"",imgurl:"",songn:"",singn:""}
    }
  }
  getdata=()=>{
    console.log(this.props.location.state)
    let sdata=this.props.location.state
    let str1=sdata.id
    let str={"mids":[str1]}
    axios.post("/api/music/songurl",str).then((res)=>{
      console.log(res)
      this.setState({
        song:{...this.state.song,
            url:res.data.urls[0],
            imgurl:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+sdata.imgurl+".jpg?max_age=2592000",
            songn:sdata.songn,
            singn:sdata.singn

          }

      })
    })
  }
        //后退
backClick(){
  this.props.history.go(-1)
}
  componentDidMount(){
    this.getdata()
  }
  render() {
    let song=this.state.song
    console.log(song)
    return (
      <div className="play">
        <div className="backg"> 
          <img src={song.imgurl} />
        </div>
        <div className="header">
          <h2>{song.songn}</h2>
          <p>{song.singn}</p>
          <span className="back" onClick={this.backClick.bind(this)}>返回</span>
        </div>
        <div className="tu">
          <div className="tu-1">
          <img src={song.imgurl}/>
          </div>
        </div>
        <audio controls src={song.url} className="start" >1</audio>
        
      </div>
    )
  }
}
