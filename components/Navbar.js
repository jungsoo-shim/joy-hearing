import a from "next/link";
import Image from "next/image";
import BurgerMenuIcon from '@components/BurgerMenuIcon';

export default function Navbar() {

 function toggleMenu() {
     var menu = document.getElementById("mobile-links");
     (menu.style.display === "block") ? menu.style.display = "none" : menu.style.display = "block"; 
 }

 return (
  <>
   <nav className="w-screen position: fixed bg-white shadow px-2 py-3 flex justify-between items-center">

    <div className="flex items-center">
     <img className="h-10 px-3" src="/joy-hearing-logo.svg"/>

     <h1 className="text-xl font-mono">Joy Hearing Aid Centre</h1>
    </div>

    <div id="mobile-links" className="flex flex-col">
     <a href="#home"></a>
     <a href="#about"></a>
     <a href="#services"></a>
     <a href="#pricing"></a>
     <a href="#contact"></a>
    </div>

    <div className="flex items-center md:hidden hover:bg-slate-200">
     <button onclick="toggleMenu()">
     <BurgerMenuIcon />
     </button>
    </div>
    
    <div className="max-md:hidden flex">
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
