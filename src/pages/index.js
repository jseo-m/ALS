import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { StyleHome } from '@/lib/styles'
import { Button } from '@mui/material'


export default function HomePage() {
  return (
    <StyleHome>
      <section>
        <div>
          <div>
            <p>제조견적이 필요하신가요?</p>
            <p>엠슈머에서는 모든 제조업계의 견적과 입찰이 가능합니다.</p>
          </div>
          <div>
            <Button variant="outlined" className='defaultFont'>견적하기</Button>
            <Button variant="outlined" className='defaultFont'>입찰하기</Button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <p>제조견적이 필요하신가요</p>
            <p>엠슈머에서는 모든 제조업계의 견적과 입찰이 가능합니다.</p>
          </div>
          <div>
            <button>button1</button>
            <button>button2</button>
          </div>
        </div>
      </section>
    </StyleHome>
  )
}
