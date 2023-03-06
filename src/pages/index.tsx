import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

// possoble Fonts; Amatic

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
        <h1><a href="/">BushCub's Adventure's</a></h1>
        <Nav/>
      </main>
      <Footer/>
    </>
  )
}
