import React from 'react'

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font mt-7v" id='footer'>
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a href='https://www.google.com/maps/dir//jai+Mata+Filling+Station,+5JC5%2BGCJ,+Bawal-Rewari+Rd,+Chandpur+Ki+Dhani,+Rewari,+Haryana+123401/@28.1703295,76.5670265,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d50789dbfb34f:0xb2977db7fbe4fefb!2m2!1d76.6082264!2d28.1703357?entry=ttu' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <button className='bg-blue-500 p-2 rounded text-xl text-slate-200' >Get Direction</button>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 JSRI Fabrication 
      <p className='text-xl'><b>Phone:</b>+91 95182-79999, 01274-295129</p>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <p className='text-xl'><b>Email:</b> jsrindustrialfabrication@gmail.com</p>
      </span>
    </div>
  </footer>
  )
}
