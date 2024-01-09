import a from "next/link";
import Image from "next/image";

export default function Navbar() {
 return (
  <>
   <nav className="bg-white shadow px-2 py-3 flex justify-between items-center">

    <div className="flex items-center">
     <img className="h-10 px-3" src="/joy-hearing-logo.svg"/>

     <h1 className="text-xl font-mono">Joy Hearing Aid Centre</h1>
    </div>

    <div className="flex">
     <a className="px-3 py-2 hover:bg-slate-200" href="#home">
      Home
     </a>

     <a className="px-3 py-2 hover:bg-slate-200" href="#about">
      About
     </a>

     <a className="px-3 py-2 hover:bg-slate-200" href="#services">
      Services
     </a>

     <a className="px-3 py-2 hover:bg-slate-200" href="#pricing">
      Pricing
     </a>

     <a className="px-3 py-2 hover:bg-slate-200" href="#contact">
      Contact
     </a>

    </div>

   </nav>
  </>
 )
}
