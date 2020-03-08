// import axios from 'axios';
// var service = axios.create({
//   baseURL:"/api",  //所有的请求都会 带上 /api
//   "content-type":"application/json",
//   timeout:5000
// })

// // //请求拦截器
// service.interceptors.request.use((config)=>{
//   // console.log(123)
//   // if(sessionStorage.getItem("token")){
//   // console.log(456)
//   //   config.headers["token"]=sessionStorage.getItem("token");
//   // }
//   // return config;

// })
// // //响应拦截器
// service.interceptors.response.use((res)=>{
// // console.log(res)
// // if(res.data.status==-1){  //token验证失败了
// //   //跳转到登陆页面
// //   console.log("失败了")
// //   window.location.href="/login"
 
// // }
// //   return res.data
// })
// export default service;