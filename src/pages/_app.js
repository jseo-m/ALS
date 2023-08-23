import { Layout_Standard, Layout_main } from '@/components/Layout'
import { useRefresh } from '@/lib/hooks'
import '@/lib/styles/globals.css'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }) {
  const {pathname} = useRouter()

  useRefresh()

  const getLayout = Component.getLayout || (page => (
    pathname === "/" ? <Layout_main>{page}</Layout_main>
    : <Layout_Standard>{page}</Layout_Standard>
  ))
  return getLayout(<Component {...pageProps} />)
}
