import { Layout_main } from '@/components/Layout'
import '@/lib/styles/globals.css'

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || (page => (
    <Layout_main>{page}</Layout_main>
  ))
  return getLayout(<Component {...pageProps} />)
}
