import { StyledLayout_Main, StyledLayout_Standard } from "@/lib/styles";
import { Header_main } from "./Header";
import { useEffect, useState } from "react";

export function Layout_main({children}) {
	const [isMainTop, setIsMainTop] = useState(true);

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

    return(
			<div className="video-background">
					<video autoPlay loop muted className="video">
						<source src="https://cdn.steelboso.com/common/file/landing/landing.mp4" type='video/mp4'/>
					</video>
				<StyledLayout_Main>
					<div>
						<Header_main isMainTop={isMainTop}/>
						<main>{children}</main>
					</div>
				</StyledLayout_Main>
				</div>
    )
}
export function Layout_Standard({children}) {

    return(
			<StyledLayout_Standard>
					<div>
						<Header_main />
						<main>{children}</main>
					</div>
			</StyledLayout_Standard>
    )
}