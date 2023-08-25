import Axios from "axios";
import Constants from "@/lib/Constants"
// import * as vod from './vod'
import * as account from './account'
import * as user from './user'
// import * as main from './main'
// import * as device from './device'
// import * as setting from './setting'
// import * as user from './user'
// import * as manage from './manage'
// import * as cs from './cs'

export const axios = {
  serverless: Axios.create({baseURL: "http://localhost:3000/", withCredentials: false}),
  unauth: Axios.create({baseURL: Constants.Base.baseUrl, withCredentials: false}),
  main: Axios.create({baseURL: Constants.Base.baseUrl, withCredentials: false}),
}

// axios.main.interceptors.request.use(
//   function(config){

//     const refreshToken = Cookies.get('refreshToken')
//     if(refreshToken === undefined) return Promise.reject()
    
//     const token = useAuth.getState().aToken
//     const token1 = `Bearer ${token}`
//     console.log("Axios start");
//     config.headers.Authorization = token ? `Bearer ${token}` : ""; 

//     return config;
//   }
// )

// let refresh = false // this is for preventing from requesting again
// axios.main.interceptors.response.use(
//   response => response,
//   async function (error) {

//     if(error.response.data.authcode =="401"){
//       console.log("Axios response");
//       const originalRequest = error.config
//       const refreshToken = Cookies.get('refreshToken')
//       // if(refreshToken!==undefined){
//         await Axios({
//           method: 'post',
//           url: Constants.Base.baseUrl+`getToken2`,
//           data: { refreshToken : refreshToken}, 
//         }).then(res =>{
//           const newToken = res.data.token
//           const newRefreshToken = res.data.refreshToken

//           useAuth.setState((state) => ({aToken: newToken}))
//           Cookies.set('refreshToken', newRefreshToken)

//           console.log("Axios retry");
//           originalRequest.headers.Authorization = `Bearer ${newToken}`
//           // console.log(originalRequest)

//           return Axios(originalRequest)
//         }).catch(ex =>{
//           console.log('expire refreshToken')
//           // Cookies.remove('token')
//           Cookies.remove('refreshToken')

//           window.location.assign('/unauth/signin')
//           return Promise.reject(error);
//         });
//       // }else{
//       //   return Promise.reject('empty rToken');
//       // }
//       // console.log(response);
//     }else{
      
//       return Promise.reject(error)
//     }
//   },
// )

export default {
  account,
  user,
  // main,
  // device,
  // setting,
  // user,
  // cs,
  // manage
}