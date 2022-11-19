import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Joy Hearing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Joy Hearing</h1>
        <p>Site is under construction</p>
        <p>Please call 416-512-9292 for services</p>
      </main>
    </div>
  )
}
