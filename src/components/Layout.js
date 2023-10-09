import { StyledLayout_Main, StyledLayout_Mypage, StyledLayout_Standard } from "@/lib/styles";
import { Header_main } from "./Header";
import { useEffect, useState } from "react";
import { Nav_mypage } from "./Nav";

export function Layout_main({children}) {
	const [isMainTop, setIsMainTop] = useState(true);
/* 
	useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치에 따라 배경색을 변경합니다.
      if (window.scrollY === 0) {
        setIsMainTop(true);
      } else {
        setIsMainTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 */
    return(
				<StyledLayout_Main>
						<Header_main isMainTop={isMainTop}/>
						<main>{children}</main>
				</StyledLayout_Main>
    )
}
export function Layout_Standard({children}) {

    return(
			<StyledLayout_Standard>
        <Header_main />
        <main>{children}</main>
			</StyledLayout_Standard>
    )
}
export function Layout_Mypage({children}) {

    return(
			<StyledLayout_Mypage>
        <Header_main />
        <Nav_mypage />
        <main>{children}</main>
			</StyledLayout_Mypage>
    )
}