import { Layout_Standard, Layout_main } from '@/components/Layout'
import '@/lib/styles/globals.css'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }) {
  const {pathname} = useRouter()

  console.log(pathname)
  const getLayout = Component.getLayout || (page => (
    pathname === "/" ? <Layout_main>{page}</Layout_main>
    : <Layout_Standard>{page}</Layout_Standard>
  ))
  return getLayout(<Component {...pageProps} />)
}
