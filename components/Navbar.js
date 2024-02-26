import BurgerMenuIcon from '@components/BurgerMenuIcon';

export default function Navbar() {

 function toggleMenu() {
     var menu = document.getElementById("mobile-links");
     (menu.style.display === "block") ? menu.style.display = "none" : menu.style.display = "block"; 
 }

 return (
  <>
   <nav className="w-screen position: fixed bg-white shadow flex flex-col">

    <div className="flex justify-between items-center">
        <div className="flex py-3 items-center">
         <img className="h-10 px-3" src="/joy-hearing-logo.svg"/>

         <h1 className="text-xl font-mono">Joy Hearing Aid Centre</h1>
        </div>

        <div className="py-3 flex items-center md:hidden hover:bg-slate-200">
         <button onClick={toggleMenu}>
         <BurgerMenuIcon />
         </button>
        </div>
        
        <div className="mx-2 max-md:hidden flex">
         <a className="px-3 py-5 hover:bg-slate-200" href="#home">
          Home
         </a>

         <a className="px-3 py-5 hover:bg-slate-200" href="#about">
          About
         </a>

         <a className="px-3 py-5 hover:bg-slate-200" href="#services">
          Services
         </a>

         <a className="px-3 py-5 hover:bg-slate-200" href="#pricing">
          Pricing
         </a>

         <a className="px-3 py-5 hover:bg-slate-200" href="#contact">
          Contact
         </a>
        </div>
    </div>

    <div id="mobile-links" className="hidden bg-slate-400 flex-col px-3 py-2">
     <div><a href="#home">Home</a></div>
     <div><a href="#about">About</a></div>
     <div><a href="#services">Services</a></div>
     <div><a href="#pricing">Pricing</a></div>
     <div><a href="#contact">Contact</a></div>
    </div>

   </nav>
  </>
 )
}
