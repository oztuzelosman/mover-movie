import Link from 'next/link';
import {SignedIn,SignedOut,UserButton} from '@clerk/nextjs'

export default function Header(){
  return(
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <ul className='flex gap-4'>
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <SignedOut>
          <Link href={'/sign-in'}>Sign In</Link>
        </SignedOut>
        <li className="hidden sm:block">
          <Link href={'/'}>Home</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
      <Link href={'/'}>
        <span className="text-2xl font-bold bg-red-500 py-1 px-2 rounded-lg">
          Movie
        </span>
        <span className="text-2xl font-bold bg-red-500 py-1 px-2 rounded-lg">
          APP
        </span>
      </Link>
    </div>
  )
}
