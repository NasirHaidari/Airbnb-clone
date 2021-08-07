import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:p-7 '>
      <div className='relative flex items-center h-10 cursor-pointer hover:animate-bounce'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* middle */}
      <div className='middle flex items-center  rounded-full py-2 md:shadow-sm md:border-2'>
        <input
          type='text'
          className='pl-5 bg-transparent outline-none flex-grow text-gray-400'
          placeholder='Start your search'
        />
        <SearchIcon className='h-8 hidden bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2' />
      </div>
      {/* right */}
      <div className='right flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6' />
        <div className='flex items-center space-x-2 border-2 border-gray-400 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserIcon className='h-6' />
        </div>
      </div>
    </header>
  )
}

export default Header
