// 백엔드 구축전  serverless API 를 위한 route
import Mock from "@/lib/Mock";
import { connection } from "@/lib/sqlConnect";


function executeQuery(queryString) {
  return new Promise((resolve, reject) => {
    connection.query(queryString, (err, rows, fields) => {
      if (err) {
        reject(err); // 쿼리 실행 중 오류가 발생한 경우 reject를 호출하여 에러를 전달합니다.
      } else {
        resolve(rows); // 쿼리가 성공하면 resolve를 호출하여 결과를 전달합니다.
      }
    });
  });
}

export async function getElementDataSQL(req, res){
  const param = req.body
  var queryString = `SELECT A.* 
                      ,ROUND (A.plating_min_value1 - (((A.plating_max_value1 - A.plating_min_value1)/4))*3) AS chart_min_value1
                      ,ROUND (A.plating_max_value1 + (((A.plating_max_value1 - A.plating_min_value1)/4))*3) AS chart_max_value1
                    FROM plating_line_element A where plating_main_line_index = ${param.lineIdx}`
  // console.log(queryString)
  try {
    const rows = await executeQuery(queryString)

    if(rows){
      res.status(200).json(rows)
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}


export default function handler(req, res) {
  const {action} = req.body

  switch(action){
    case "getElementData" : 
      getElementDataSQL(req,res)
      break;
    default : res.status(400).json({ error: 'Invalid action' });
  }
  
}
