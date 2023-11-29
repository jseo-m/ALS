// 백엔드 구축전  serverless API 를 위한 route
import Mock from "@/lib/Mock";
import { connection } from "@/lib/sqlConnect";

export function getLineElementSQL(req, res){
  const param = req.body
  var queryString = `SELECT * FROM plating_line_element  where plating_main_line_index = ${param.lineIdx}`
  console.log(queryString)

  connection.query(queryString, (err,rows,fields) => {
    if(!!err){
      res.status(400).json(err)
    }else{
      res.status(200).json(rows)
    }
  })

}

export function getElementDataSQL(req, res){
  const param = req.body
  var queryString = `SELECT * FROM plating_line_element  where plating_main_line_index = ${param.lineIdx}`
  // console.log(queryString)

  connection.query(queryString, (err,rows,fields) => {
    if(!!err){
      return res.status(400).json(err)
    }else{
      return res.status(200).json(rows)
    }
  })

}

export function myEstList(req, res){
  const mock = Mock.estList
  res.status(200).json({data: mock})
}
export function myEstView(req, res){
  const mock = Mock.estList
  const result = mock.find(v => v.id == req.body.id)
  res.status(200).json({data: result})
}

export default function handler(req, res) {
  const {action} = req.body

  switch(action){
    case "getLineElement" : 
      getLineElementSQL(req,res)
      break;
    case "getElementData" : 
      getElementDataSQL(req,res)
      break;
    case "myEstView" : 
      myEstView(req,res)
      break;
    default : res.status(400).json({ error: 'Invalid action' });
  }
  
}
