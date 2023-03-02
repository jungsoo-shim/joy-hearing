import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
	<>
	    <div class="bg-slate-400 flex flex-col h-screen justify-between">
	    <Navbar />
	    <main>{children}</main>
	    <Footer />
	    </div>
	</>
    )
}
