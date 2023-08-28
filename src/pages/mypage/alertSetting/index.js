import { StylesPage_Mypage } from "@/lib/styles";
import { Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function AlertSetting(){
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('관심입찰 등록', 159, 6.0, 24, "회사정보에 등록된 주요제품 관련 키워드의 입찰 등록"),
    createData('내입찰 투찰 등록', 237, 9.0, 37, 4.3),
    createData('내입찰 투찰 문의', 262, 16.0, 24, 6.0),
    createData('내입찰 마감기한', 305, 3.7, 67, 4.3),
    createData('내입찰 마감', 356, 16.0, 49, 3.9),
  ];

  return(
    <StylesPage_Mypage>
      <h1>알람설정</h1>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>견적</TableCell>
              <TableCell align="left">웹 알림</TableCell>
              <TableCell align="left">이메일 알림</TableCell>
              <TableCell align="left">카카오톡 알림</TableCell>
              <TableCell align="left">설명</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left"><Switch defaultChecked /></TableCell>
                <TableCell align="left"><Switch defaultChecked /></TableCell>
                <TableCell align="left"><Switch defaultChecked /></TableCell>
                <TableCell align="left">알림항목에 대한 설명이 들어갑니다.</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StylesPage_Mypage>
  )
}