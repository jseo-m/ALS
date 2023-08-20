import { Header_main } from "./Header";

export function Layout_main({children}) {

    return(
        <div>
					<Header_main />
					<main>{children}</main>
        </div>
    )
}