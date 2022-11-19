import Link from 'next/link';

export default function Navbar() {
 return (
  <>
   <nav className='flex items-center flex-wrap bg-black text-white p-3'>
    <Link href='/'>
     Home
    </Link>
   </nav>
  </>
 )
}
