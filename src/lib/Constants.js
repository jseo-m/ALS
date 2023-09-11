export default {
  Base: {
    // header :{Authorization : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiTmNuVnVlcm9pZEFQSTIwMjMiOiJST0xFX1VTRVIiLCJleHAiOjE2NzQ2MTA1OTB9.LWheMkxLzTd_5gsRkgwOpbKzDfaa5RNFnzZ-MUpp_E7XHsbWfmtSS_uzj_zGRRSEIJrFsdD_nZYzqJHaDDc_WQ'},
    // baseUrl: "http://192.168.1.39:8081/",
    baseUrl: process.env.NEXT_PUBLIC_SERVER_API,
    adminUrl: process.env.NEXT_PUBLIC_SERVER_ADMIN_API,
    server: process.env.NEXT_PUBLIC_SERVER_DEV,
    vodserver: process.env.NEXT_PUBLIC_VODSERVER_DEV
  },
  QueryClient: {
    config: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    }
  },
  SNS: {
    list: ['google', 'facebook', 'apple']
  },
  topMenu: [
    {name: "견적문의", url: ""},
    {name: "입찰시스템", url: ""}, 
    {name: "공장찾기", url: ""},
    {name: "지원사업공고", url: ""},
    {name: "고객지원", url: ""}
  ],
  myMenu: [
    {name: "MY 활동", url: "", type: "group"},
    {name: "견적문의", url: "/mypage/estimate", img:"/svg/estimate.svg"},
    {name: "입찰시스템", url: "", img:"/svg/bid.svg"}, 
    {name: "문의게시판", url: "", img:"/svg/inquiry.svg"},
    {name: "평점", url: "", img:"/svg/starHalfFilled.svg"},
    {name: "MY 정보", url: "", type: "group"},
    {name: "회원정보 확인/수정", url: "", img:"/svg/personFilled.svg"},
    {name: "알림설정", url: "/mypage/alertSetting", img:"/svg/notificationsFilled.svg"}, 
    {name: "기업회원 전환하기", url: "", img:"/svg/changeFilled.svg"},
  ],
  dashCard: [
    {enname: "Quote Contact", name: "견적문의", url: "/mypage/estimate", img:"/svg/calculator.svg", contents:"회원님의 견적문의 게시물을 관리하는 공간입니다"},
    {enname: "Bidding system", name:"입찰", url: "", img:"/svg/diploma.svg", contents:"회원님의 입찰을 관리하는 공간입니다"},
    {enname: "Grade", name:"평점", url: "", img:"/svg/confetti.svg", contents:"회원님의 평점을 관리하는 공간입니다"},
    {enname: "Profile", name:"회원정보", url: "", img:"/svg/user-add.svg", contents:"회원님의 개인정보를 확인/수정 관리하는 공간입니다"},
    {enname: "Alarm", name:"알람설정", url: "", img:"/svg/bell-ring.svg", contents:"회원님의 알람설정을 관리하는 공간입니다"},
    {enname: "Transform", name:"기업회원 전환하기", url: "", img:"/svg/refresh.svg", contents:"일반회원에서 기업회원으로 전환할 수 있는 공간입니다"},
  ],
  phone:[
    {value:"010", name: "010"},
    {value:"011", name: "011"},
    {value:"017", name: "017"},
    {value:"016", name: "016"},
  ],
  email:[
    {value:"", name: "직접입력"},
    {value:"@naver.com", name: "@naver.com"},
    {value:"@gmail.com", name: "@gmail.com"},
    {value:"@hanmail.net", name: "@hanmail.net"},
    {value:"@nate.com", name: "@nate.com"},
    {value:"@kakao.com", name: "@kakao.com"},
    {value:"@msn.com", name: "@msn.com"},
  ],

  
  AlertSenders: [
    {name: "ALL", text: "전체"},
    {name: "DEVICE", text: "단말알림"},
    {name: "SERVER", text: "서버알림"},
  ],
  AlarmsName : [
    {name : "PushYn", text : "푸쉬"},
    {name : "EmailYn", text : "이메일"},
    {name : "SmsYn", text : "SMS"},
    {name : "WebYn", text : "Web"},
    {name : "MovYn", text : "영상"},
    {name : "ImgYn", text : "이미지"},
  ],
  locales: [
    {locale: 'en', text: "English"},
    {locale: 'ko', text: "한국어"},
    {locale: 'he', text: "עִברִית"},
  ],
  inquiryState: ["", "신규문의", "진행중", "답변완료"], 

  TIME : [
    {name: "오전0시",value: "00:00"}, {name: "오전0시반",value: "00:30"},
    {name: "오전1시",value: "01:00"}, {name: "오전1시반",value: "01:30"},
    {name: "오전2시",value: "02:00"}, {name: "오전2시반",value: "02:30"},
    {name: "오전3시",value: "03:00"}, {name: "오전3시반",value: "03:30"},
    {name: "오전4시",value: "04:00"}, {name: "오전4시반",value: "04:30"},
    {name: "오전5시",value: "05:00"}, {name: "오전5시반",value: "05:30"},
    {name: "오전6시",value: "06:00"}, {name: "오전6시반",value: "06:30"},
    {name: "오전7시",value: "07:00"}, {name: "오전7시반",value: "07:30"},
    {name: "오전8시",value: "08:00"}, {name: "오전8시반",value: "08:30"},
    {name: "오전9시",value: "09:00"}, {name: "오전9시반",value: "09:30"},
    {name: "오전10시",value: "10:00"}, {name: "오전10시반",value: "10:30"},
    {name: "오전11시",value: "11:00"}, {name: "오전11시반",value: "11:30"},
    {name: "오전12시",value: "12:00"}, {name: "오전12시반",value: "12:30"},
    {name: "오후13시",value: "13:00"}, {name: "오후13시반",value: "13:30"},
    {name: "오후14시",value: "14:00"}, {name: "오후14시반",value: "14:30"},
    {name: "오후15시",value: "15:00"}, {name: "오후15시반",value: "15:30"},
    {name: "오후16시",value: "16:00"}, {name: "오후16시반",value: "16:30"},
    {name: "오후17시",value: "17:00"}, {name: "오후17시반",value: "17:30"},
    {name: "오후18시",value: "18:00"}, {name: "오후18시반",value: "18:30"},
    {name: "오후19시",value: "19:00"}, {name: "오후19시반",value: "19:30"},
    {name: "오후20시",value: "20:00"}, {name: "오후20시반",value: "20:30"},
    {name: "오후21시",value: "21:00"}, {name: "오후21시반",value: "21:30"},
    {name: "오후22시",value: "22:00"}, {name: "오후22시반",value: "22:30"},
    {name: "오후23시",value: "23:00"}, {name: "오후23시반",value: "23:30"},
  ],

  temp : [
    {name: "ºC",value: "ºC"},
    {name: "ºF",value: "ºF"}
  ],
  
  dist : [
    {name: "km",value: "km"},
    {name: "mile",value: "mile"}
  ],
  weather:{
    "01d":{icon:"https://openweathermap.org/img/wn/01d.png", descText: "맑음"}, //맑음
    "01n":{icon:"https://openweathermap.org/img/wn/01n.png", descText: "맑음"}, //맑음
    "02d":{icon:"https://openweathermap.org/img/wn/02d.png", descText: "구름 조금"}, //구름 조금
    "02d":{icon:"https://openweathermap.org/img/wn/02d.png", descText: "구름 조금"}, //구름 조금
    "03d":{icon:"https://openweathermap.org/img/wn/03d.png", descText: "흐림"}, //흐림
    "03n":{icon:"https://openweathermap.org/img/wn/03n.png", descText: "흐림"}, //흐림
    "04d":{icon:"https://openweathermap.org/img/wn/04d.png", descText: "매우 흐림"}, //매우흐림
    "04n":{icon:"https://openweathermap.org/img/wn/04n.png", descText: "매우 흐림"}, //매우흐림
    "09d":{icon:"https://openweathermap.org/img/wn/09d.png", descText: "비"}, //비
    "09n":{icon:"https://openweathermap.org/img/wn/09n.png", descText: "비"}, //비
    "10d":{icon:"https://openweathermap.org/img/wn/10d.png", descText: "소나기"}, //소나기
    "10n":{icon:"https://openweathermap.org/img/wn/10n.png", descText: "소나기"}, //소나기
    "11d":{icon:"https://openweathermap.org/img/wn/11d.png", descText: "폭우"}, //폭우
    "11n":{icon:"https://openweathermap.org/img/wn/11n.png", descText: "폭우"}, //폭우
    "13d":{icon:"https://openweathermap.org/img/wn/13d.png", descText: "눈"}, //눈
    "13n":{icon:"https://openweathermap.org/img/wn/13d.png", descText: "눈"}, //눈
    "50d":{icon:"https://openweathermap.org/img/wn/50d.png", descText: "안개"}, //안개
    "50n":{icon:"https://openweathermap.org/img/wn/50n.png", descText: "안개"}, //안개
  }
}