import React from 'react'

const NavBar = () => {
  return (
    <div className="flex justify-between pl-4 pr-4 border-b-2 border-gray-600 h-16 items-center">
    <div>
      <p className="text-3xl font-extralight">TBD</p>
    </div>

    <div className="flex flex-row gap-16 justify-center items-center">
      <p className='font-bold'>Dashboard</p>
      <p className='font-bold'>Message</p>
      <p className='font-bold'>Appointment</p>
      <p className="font-bold border-b-4 border-black h-16 flex justify-center items-center">
        History
      </p>
    </div>
    <div className="font-bold flex flex-row gap-4 justify-center items-center">
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
      </svg>
      <div className="h-10 w-[1px] bg-gray-500" />
      <img
        className="h-6 w-6 rounded-full"
        src="https://media.licdn.com/dms/image/D4D03AQEkSc9Fn36fPg/profile-displayphoto-shrink_400_400/0/1677093922765?e=1687996800&v=beta&t=v03sq033fBIpvPIIAVfQK1hvE88CmqI35OIuTgnn5u4"
        alt=""
      />
      hii,john
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
      </svg>
    </div>
  </div>
  )
}

export default NavBar