import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Amatic_SC } from 'next/font/google'
import VideosList from '@/components/VideosList'

const amatic = Amatic_SC({
  weight: ['700', '400'],
  subsets: ['latin']
})


export default function Home() {
  return (
    <>
      <Head>
        <title>BushCub's Adventure's</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
</style>
      </Head>
      <main className={styles.main}>
        <a href="/"><h1 className={amatic.className}>BushCub's Adventure's</h1></a>
        <Nav />
        <VideosList/>
      </main>
      <Footer/>
    </>
  )
}
