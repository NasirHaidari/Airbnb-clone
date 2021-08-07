const Footer = () => {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p className=''>How Airbnb works</p>
        <p className=''>Newsroom</p>
        <p className=''>Investors</p>
        <p className=''>Airbnb Plus</p>
        <p className=''>Airbnb Luxe</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p className=''>Diversity & Belonging</p>
        <p className=''>Against Discrimination</p>
        <p className=''>Accessibility</p>
        <p className=''>Airbnb Associates</p>
        <p className=''>Frontline Stays</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p className=''>Host your home</p>
        <p className=''>Host an Online Experience</p>
        <p className=''>Host an Experience</p>
        <p className=''>Responsible hosting</p>
        <p className=''>Resource Center</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p className=''>Our COVID-19 Response</p>
        <p className=''>Help Center</p>
        <p className=''>Cancellation options</p>
        <p className=''>Neighborhood Support</p>
        <p className=''>Trust & Safety</p>
      </div>
    </footer>
  )
}

export default Footer
