import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/header';
import Main from '../components/main';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asteria Kremlin Palace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Header/>
      <Main/>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["navbar","header"],
     
    )),
  },
});