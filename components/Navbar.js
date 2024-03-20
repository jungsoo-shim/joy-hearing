import BurgerMenuIcon from '@components/BurgerMenuIcon';

export default function Navbar() {

 function toggleMenu() {
     var menu = document.getElementById("mobile-links");
     (menu.style.display === "block") ? menu.style.display = "none" : menu.style.display = "block"; 
 }

 return (
  <>
   <nav className="z-10 w-screen position: fixed bg-white shadow flex flex-col">

    <div className="flex justify-between items-center">
         <a className="flex py-3 items-center" href="#home">
         <img className="h-10 px-3" src="/joy-hearing-logo.svg"/>
         <h1 className="text-xl font-mono">Joy Hearing Aid Centre</h1>
         </a>

        <div className="p-2 flex items-center md:hidden hover:bg-slate-300">
         <button onClick={toggleMenu}>
         <BurgerMenuIcon />
         </button>
        </div>
        
        <div className="mx-2 max-md:hidden flex">
         <a className=" px-3 py-5 hover:bg-slate-300" href="#home">
          Home
         </a>

         <a className="px-3 py-5 hover:bg-slate-300" href="#about">
          About
         </a>

         <a className="px-3 py-5 hover:bg-slate-300" href="#services">
          Services
         </a>

         <a className="px-3 py-5 hover:bg-slate-300" href="#contact">
          Contact
         </a>
        </div>
    </div>

    <div id="mobile-links" className="text-center text-white font-semibold hidden bg-slate-500 flex-col"> 
     <div className="hover:bg-slate-300 hover:text-slate-700 p-2"><a href="#home">Home</a></div>
     <div className="hover:bg-slate-300 hover:text-slate-700 p-2"><a href="#about">About</a></div>
     <div className="hover:bg-slate-300 hover:text-slate-700 p-2"><a href="#services">Services</a></div>
     <div className="hover:bg-slate-300 hover:text-slate-700 p-2"><a href="#contact">Contact</a></div>
    </div>

   </nav>
  </>
 )
}
