import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import About from '@components/About'
import Services from '@components/Services'
import Pricing from '@components/Pricing'
import Contact from '@components/Contact'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Joy Hearing Aid Centre | North York, Toronto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4">
        <div className="bg-white px-4">
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Contact />
        </div>
      </main>
    </div>
  )
}
