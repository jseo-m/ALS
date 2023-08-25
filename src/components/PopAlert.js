import api from "@/lib/api";
import { Divider, Menu, MenuItem } from "@mui/material";

export default function PopAlert({anchorEl, setAnchorEl}){
  const open = Boolean(anchorEl);
  const {isLoading, data} = api.user.useAlertList()
  if(isLoading) return (<>"loading..."</>)
  const alertData = data.data
  return(
    <>
    <Menu 
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={() => setAnchorEl(null)}
      onClick={() => setAnchorEl(null)}
      PaperProps={{
        elevation: 0,
        sx: {
          display: 'grid',
          borderRadius: '20px',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          padding: '10px 20px',
          width: '280px',
          height: '500px',
          mt: 1.5,
          '& ul':{
            display: 'flex',
            flexDirection: 'column'
          },
          '& hr':{
            margin:'8px 0',
          },
          '& .alertTop':{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '14px',
            '& > span:nth-of-type(1)':{
              fontWeight:700,
            },
            '& > span:nth-of-type(2)':{
              fontSize: '12px',
              textDecoration:'underline',
            }
          },
          '& .alertBody':{
            flex: 1,
            '& > li':{
              display: 'grid',
              padding: '10px 0',
              '& > p:nth-of-type(1)': {
                fontSize: '9px',
              },
              '& > p:nth-of-type(2)': {
                fontSize: '12px',
                fontWeight: 700,
              },
              '& > p:nth-of-type(3)': {
                fontSize: '10px',
                fontWeight: 700,
              }
            },
            
          },
          '& .alertBottom':{
            display: 'flex',
            justifyContent: 'center',
            padding: '2px',
            fontSize: '14px',
            fontWeight: 500,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <section className="alertTop">
        <span>알림</span>
        <span>모두 읽음처리</span>
      </section>
        <Divider />
      <section className="alertBody">
        {alertData?.map(v => (
          <MenuItem >
            <p>{v.date}</p>
            <p>{v.title}</p>
            <p>{v.contents}</p>
          </MenuItem>
        ))}
      </section>
      <Divider />
      <section className="alertBottom">
        <img src="/svg/addFilled.svg"/>
        <span>더보기</span>
      </section>
        
    </Menu>
    </>
  )
}