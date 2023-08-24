import { Divider, Menu, MenuItem } from "@mui/material";

export default function PopAlert({anchorEl, setAnchorEl}){
  const open = Boolean(anchorEl);
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
          width: '220px',
          mt: 1.5,
          '& ul':{
            display: 'grid',
            alignContent: 'space-between'
          },
          '& hr':{
            margin:'8px 0',
          },
          '& .welcome':{
            display: 'grid',
            fontSize: '14px',
            '& > span:nth-of-type(1)':{
              fontWeight:700,
            }
          },
          '& .popMenu':{
            '& > li':{
              display: 'flex',
              padding: '6px 0',
              fontSize: '14px',
            },
            '& > div':{
              padding:'5px 0',
              display: 'flex',
              fontSize: '12px',
              justifyContent:'flex-end'
            },
            '& span':{
              fontWeight:500,
              padding: '0 5px',
            },
          },
          '& .logout':{
            display: 'flex',
            justifyContent: 'center',
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <section className="welcome">
        <span>안녕하세요. 엠슈머님</span>
        <span>msumer</span>
      </section>
      <Divider />
      <section className="popMenu">
        <MenuItem >
          <img src="/svg/accountCircleFilled.svg"/> 
          <span>마이페이지</span>
        </MenuItem>
        <MenuItem >
          <img src="/svg/accountCircleFilled.svg"/>
          <span>알림설정</span>
        </MenuItem>
        <div>
          <span>이메일 알림받기</span>
          <input type="radio"/>
        </div>
        <div>
          <span>카카오톡으로 알림받기</span>
          <input type="radio"/>
        </div>
      </section>
      <Divider />
      <section className="logout">
        <img src="/svg/logoutFilled.svg"/>
        <span>로그아웃</span>
      </section>
        
    </Menu>
    </>
  )
}