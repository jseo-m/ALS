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
}