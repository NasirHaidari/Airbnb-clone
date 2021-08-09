import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/dist/client/router'

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)
  const router = useRouter()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput('')
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    })
  }
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:p-7 '>
      <div
        onClick={() => router.push('/')}
        className='relative flex items-center h-10 cursor-pointer hover:animate-bounce'>
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          className='pl-5 bg-transparent outline-none flex-grow text-gray-400'
          placeholder={placeholder || 'Start your search'}
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
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl pl-2 flex-grow font-semibold '>
              Number of Guests
            </h2>
            <UserIcon className='h-5' />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type='number'
              min={1}
              className='w-12 pl-2 text-lg outline-none text-red-400'
            />
          </div>
          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>
              Cancel
            </button>
            <button onClick={search} className='flex-grow text-red-400'>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
