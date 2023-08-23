// 백엔드 구축전  serverless API 를 위한 route
import Mock from "@/lib/Mock";

export function login(req, res){
  const data = req.body
  const mock = Mock.account
  if((data.id === mock.id) && (data.password === mock.password)){
    res.status(200).json({data: {accessToken: "test", refreshToken: "testRefreshToken", name: "홍길동"}})
  }else{
    res.status(400).json({error: "unAuthentication"})
  }
}

export default function handler(req, res) {
  const {action} = req.body

  switch(action){
    case "login" : login(req,res)
    default : res.status(400).json({ error: 'Invalid action' });
  }
  
}
