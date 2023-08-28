export default {
  account:{id: "msumer", password: "1234"},

  alertList: Array.from({length: 3}).map((v, i) => {
    const random1 = Math.random()
    return ({
      date : random1 > 0.5 ? `2023-08-2${i+1} PM ${Math.floor(random1*10)}:30` : `2023-08-2${i+1} AM ${Math.floor(random1*10)}:30`,
      title : random1 > 0.6 ? "견적 신청이 완료되었습니다." : random1 > 0.3 ? "입찰 신청이 완료되었습니다" : "시스템 공지",
      contents : random1 > 0.6 ? "견적 신청이 완료되었습니다. 다른 기업의 입찰을 기다려 주세요." : random1 > 0.3 ? "입찰 신청이 완료되었습니다. 기업의 승낙여부를 기다려 주세요" : "엠슈머 시스템의 공지사항이 등록되었습니다. 확인해 보세요."
    })
  }),

  estList: [
            {
              id: 1, 
              title:"필터하우징 견적요청", 
              regDate:"2023-08-10", 
              estDate:"2023-08-30", 
              phone:"010-1111-2222", 
              email:"email@naver.com", 
              fileName:"도면1.jpg", 
              contents:"필터하우징 견적받고 싶습니다. 인증까지 가능한 제작업체가 있을까요? 필터하우징 견적받고 싶습니다."
            },
            {
              id: 2, 
              title:"필터하우징2 견적요청", 
              regDate:"2023-08-11", 
              estDate:"2023-08-31", 
              phone:"010-3333-2222", 
              email:"email1@naver.com", 
              fileName:"도면1.jpg", 
              contents:"필터하우징 견적받고 싶습니다. 인증까지 가능한 제작업체가 있을까요? 필터하우징 견적받고 싶습니다."
            },
            {
              id: 3, 
              title:"필터하우징3 견적요청", 
              regDate:"2023-08-12", 
              estDate:"2023-09-01", 
              phone:"010-1111-4444", 
              email:"email2@naver.com", 
              fileName:"도면1.jpg", 
              contents:"필터하우징 견적받고 싶습니다. 인증까지 가능한 제작업체가 있을까요? 필터하우징 견적받고 싶습니다."
            },
            {
              id: 4, 
              title:"필터하우징4 견적요청", 
              regDate:"2023-08-13", 
              estDate:"2023-09-02", 
              phone:"010-5555-2222", 
              email:"email3@naver.com", 
              fileName:"도면1.jpg", 
              contents:"필터하우징 견적받고 싶습니다. 인증까지 가능한 제작업체가 있을까요? 필터하우징 견적받고 싶습니다."
            },
          ]
}