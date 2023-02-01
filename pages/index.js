import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div class="container">
      <Head>
        <title>Joy Hearing Aid Centre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4">
        <div className="bg-white px-4">
        <h1>Joy Hearing Aid Centre</h1>
        <p>Site is under construction</p>
        <p>Please call 416-512-9292 for services</p>
        </div>
      </main>
    </div>
  )
}
