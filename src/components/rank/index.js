import React, { Component } from 'react'
import axios from "axios"
import "./index3.css"
export default class Rank extends Component {
  constructor(props){
    super(props)
    this.state ={
        list:[{
          "id": 4,
          "listenCount": 9200000,
          "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000000AHGAy4fY2z3.jpg",
          "songList": [
            {
              "singername": "苏晗",
              "songname": "火苗"
            },
            {
              "singername": "Sasha Sloan",
              "songname": "Dancing With Your Ghost"
            },
            {
              "singername": "张艺兴",
              "songname": "会好的"
            }
          ],
          "topTitle": "巅峰榜·流行指数",
          "type": 0
        },]
    }
  }
  getdata=()=>{
    axios.get("/api/music/topRank").then((res)=>{
      console.log(res)

      let nlist=res.data.data.topList
      console.log(nlist)
        this.setState({
          list:nlist
        })
    })
  }
  go=(a)=>{
      
    this.props.history.push('/ranklist',{
      id:a
    })

}
  componentDidMount(){
    this.getdata()
  }
  render() {
    let list=this.state.list
    return (
      <div className="rank" style={{height:"579px",overflow:"auto"}}>
        {
          list.map((item)=>{
            return(
              <div className="context" key={item.id} onClick={this.go.bind(this,item.id)}>
                <div className="left">
                  <img src={item.picUrl} />
                </div>
                <div className="right">
                  {
                    item.songList.map((items,index)=>{
                      return(<li key={index}>{index+1}.{items.songname}-{items.singername}</li>)
                    
                    })
                  }
                </div>
              </div>
            )
          })
        }
        
      </div>
    )
  }
}
