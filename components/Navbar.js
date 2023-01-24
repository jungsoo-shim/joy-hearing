import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
 return (
  <>
   <nav className='flex items-center space-x-4 flex-wrap bg-black text-white p-3'>
    <Image src="/joy-hearing-logo.svg" width={40} height={40}/>
    <Link href='/'>
     Home
    </Link>
    <Link href='/'>
     About
    </Link>
    <Link href='/'>
     Contact
    </Link>
   </nav>
  </>
 )
}
