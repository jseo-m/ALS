import Constants from "@/lib/Constants";
import { StylesPage_Userpage } from "@/lib/styles";
import { StylesSection_Factories } from "@/lib/styles/styled/section";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Factories(){
  const [active, setActive] = useState("location")
  const [searchFilter, setSearchFilter] = useState([])

  function addFilter(filter){
    // 이미 선택된 아이템 제거
    if (searchFilter.some((item) => item.id === filter.id)) {
      setSearchFilter((prev) =>prev.filter((item) => item.id !== filter.id))
    } else {
      // 선택되지 않은 아이템 추가
      setSearchFilter((prev) => [...prev, filter])
    }
  }

  function addAllFilter(){
    setSearchFilter(Constants.factoryAddress)
  }

  function resetFilter(){
    setSearchFilter([])
  }

  return(
    <StylesPage_Userpage>
      <section name="header">
        <p>공장찾기</p>
        <p>『산업집적활성화 및 공장설립에 관한 법률』 제16조에 따라 등록된 기업(공장) 검색</p>
      </section>
      <StylesSection_Factories>
        <section name="search">
          <div>
            <TextField size="small" fullWidth></TextField>
            <Button size="small" variant="contained"><img src="/svg/SearchFilled_white.svg" /></Button>
            <Button variant="contained"><img src="/svg/reset.svg"/></Button>
          </div>
          <div>
            <img src="/svg/SearchFilled_dark.svg"></img>
            <span>전국 등록 공장 검색</span>
          </div>
          <div>
              <div id="location" onClick={({target}) => setActive(target.id)} data-active={"location" === active}>
                <img src="/svg/LocationOnFilled.svg"/>
                <span> + 지역</span>
              </div>
              <div id="sectors" onClick={({target}) => setActive(target.id)} data-active={"sectors" === active}>
                <img src="/svg/ReceiptFilled.svg"/>
                <span> + 업종</span>
              </div>
          </div>
          <div>
            <section name="schAddr">
              <div onClick={addAllFilter}>전체</div>
              {Constants.factoryAddress.map((addr,key) => <div key={key} data-active={searchFilter.some(f => f.id === addr.id)} onClick={() => addFilter(addr)}>{addr.name}</div>)}
            </section>
            {/* <section name="schSec">
              
            </section> */}
            <section name="schSelect">
              <Button variant="contained" size="small" onClick={resetFilter}>전체해제&nbsp;<img src="/svg/cancelFilled.svg"></img></Button>
              {searchFilter.map((filter,key) => 
                <Button key={key} variant="text" size="small" onClick={() => addFilter(filter)}>
                  {filter?.name}<img src="/svg/closeFilled.svg"></img>
                </Button>
              )}
            </section>
          </div>
        </section>
        <span style={{float:'right'}}>‘이런저런’(으)로 ‘00’건이 검색되었습니다</span><br/>
        <section name="contents">
          {Array.from({length:6}, (_, i) => (
            <article>
              <section>
                <div>
                  <span style={{borderRight:'0.3px solid rgba(0, 0, 0, 0.3)', backgroundColor:'#fce4ec'}}>국가산업단지</span>
                  <span>국가산업단지</span>
                </div>
                <div>
                  <span style={{borderRight:'0.3px solid rgba(0, 0, 0, 0.3)', backgroundColor:'#fff3e0'}}>클러스터</span>
                  <span>미래형친환경자동차</span>
                </div>
                <div>
                  <span style={{backgroundColor:'#e0e0e0'}}>(사)군산국가산업단지 경영자협의회</span>
                </div>
              </section>
              <section>
                <p>(주)동양봉제기계</p>
                <p>생산품 - 봉제기계</p>
                <p>경기도 포천시 금강로 2927 (내촌면) 1층</p>
              </section>
            </article>
          ))}
        </section>
      </StylesSection_Factories>
    </StylesPage_Userpage>
  )
}