import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Health Joe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='flex '>
        <div className="logo">Health Joe</div>
        <ul>
          {/* <li>
            <Link href={'/service'}>
              <a>Service</a>
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              <a>Contact</a>
            </Link>
          </li> */}
        </ul>
      </header>
           
          
    </div>
  )
}

export default Home
                                                                                                                                                                                                                                                                                                                                                                                                                                              