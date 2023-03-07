import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
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
        <a  href="/"><h1>BushCub's Adventure's</h1></a>
        <Nav/>
      </main>
      <Footer/>
    </>
  )
}
