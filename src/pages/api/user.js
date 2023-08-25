// 백엔드 구축전  serverless API 를 위한 route
import Mock from "@/lib/Mock";

export function alertList(req, res){
  const mock = Mock.alertList
    res.status(200).json({data: mock})
}

export default function handler(req, res) {
  const {action} = req.body

  switch(action){
    case "alertList" : 
      alertList(req,res)
      break;
    default : res.status(400).json({ error: 'Invalid action' });
  }
  
}
