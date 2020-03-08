import React, { Component } from 'react'
import axios from "axios"
import "../singer/index.css"
export default class Singer extends Component {
  constructor(props){
    super(props)
    this.state ={
        list:[],
        listA:[],
        listB:[]
    }
  }
  gethot(){
    axios.get("/api/music/singerList").then((res)=>{
      console.log(res.data.data.list)
      let nlist=res.data.data.list
      nlist.map((item)=>{

        item.Fsinger_mids="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+item.Fsinger_mid+".jpg?max_age=2592000"
      })
      for(let i=0;i<10;i++){
        this.setState({
          list:[...this.state.list,nlist[i]]
        })
      }
      console.log(this.state.list)
    })
  }
  getA=()=>{
    axios.get("/api/music/singerList").then((res)=>{
      let nlist=res.data.data.list
      nlist.map((item)=>{
        item.Fsinger_mids="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+item.Fsinger_mid+".jpg?max_age=2592000"
      })
      nlist=nlist.filter((item)=>item.Findex=="A")
      console.log(nlist)
      this.setState({
        listA:nlist
      })
    })
  }
  getB=()=>{
    axios.get("/api/music/singerList").then((res)=>{
      let nlist=res.data.data.list
      nlist.map((item)=>{
        item.Fsinger_mids="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+item.Fsinger_mid+".jpg?max_age=2592000"
      })
      nlist=nlist.filter((item)=>item.Findex=="B")
      console.log(nlist)
      this.setState({
        listB:nlist
      })
    })
  }
  go=(a)=>{
      // this.props.history.push('/singerpart'+"/"+a)
      this.props.history.push('/singerpart',{
        id:a
      })
  }

  componentDidMount(){ 
    this.getA()
    this.getB()
   this.gethot()
  }
  render() {
    let listA=this.state.listA
    let listB=this.state.listB
    let list=this.state.list
    // console.log(list)
    return (
      <div className="singer" style={{height:"579px",overflow:"auto"}}>
       
        <ul>
          <li>
            <div className="lititle">hot</div>
            <div>
              {
                list.map((item)=>{
                  return (
                    <div key={item.Fsinger_id} className="geshou" 
                    onClick={this.go.bind(this,item.Fsinger_mid)}  >
                      <img src={item.Fsinger_mids} />
                      <span>{item.Fsinger_name}</span>
                    </div>
                  )
                })
              }
            </div>
          </li>
          <li>
            <div className="lititle">A</div>
            <div>
              {listA.map((item)=>{
                  return (
                    <div key={item.Fsinger_id} className="geshou" 
                    onClick={this.go.bind(this,item.Fsinger_mid)}>
                      <img src={item.Fsinger_mids} />
                      <span>{item.Fsinger_name}</span>
                    </div>
                  )
                })}
            </div>
          </li>
          <li>
            <div className="lititle">B</div>
            <div>
              {listB.map((item)=>{
                  return (
                    <div key={item.Fsinger_id} className="geshou" 
                    onClick={this.go.bind(this,item.Fsinger_mid)}>
                      <img src={item.Fsinger_mids} />
                      <span>{item.Fsinger_name}</span>
                    </div>
                  )
                })}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
