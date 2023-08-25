import { Layout_Standard, Layout_main, Layout_Mypage } from '@/components/Layout'
import Constants from '@/lib/Constants'
import { useRefresh } from '@/lib/hooks'
import '@/lib/styles/globals.css'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useState } from 'react'
export default function App({ Component, pageProps }) {
  const {pathname} = useRouter()

  useRefresh()

  const [queryClient] = useState(() => new QueryClient(Constants.QueryClient.config))

  const getLayout = Component.getLayout || (page => (
    pathname === "/" ? <Layout_main>{page}</Layout_main>
    : pathname.startsWith("/mypage") ? <Layout_Mypage>{page}</Layout_Mypage>
    : <Layout_Standard>{page}</Layout_Standard>
  ))
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(<Component {...pageProps} />)}
      </Hydrate>
    </QueryClientProvider>
    </>
    )
}
