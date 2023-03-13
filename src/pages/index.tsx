import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import VideosList from '@/components/VideosList'




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
        <Nav />
        <VideosList/>
      </main>
      <Footer/>
    </>
  )
}
