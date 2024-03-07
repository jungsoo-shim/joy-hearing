import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import About from '@components/About'
import Services from '@components/Services'
import Contact from '@components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joy Hearing Aid Centre | North York, Toronto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-slate-400 flex flex-col h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      </div>

    </div>
  )
}
