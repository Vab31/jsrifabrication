import React from 'react'

export default function Nav() {
  return (
    <div  className='mz-3 border-b-8 ' >
    <header className="text-gray-600 body-font ">
    <div className="container mx-auto flex flex-wrap p-3  flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900  md:mb-2 no-underline">
      
        <span className="ml-3 text-xl no-underline"  style={{ fontFamily: 'Instagram Sans Bold' }}>JSRI Fabrication</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center" style={{ fontFamily: 'Instagram Sans Medium' }}>
        <a className="mr-5 hover:text-gray-900 no-underline" href='#hero'>About Us</a>
        <a className="mr-5 hover:text-gray-900 no-underline" href='#footer'>Contact</a>
        <a className="mr-5 hover:text-gray-900 no-underline" href='#imggal'>Gallery</a>
 
      </nav>
      <a href='https://maps.app.goo.gl/2fiRSMj64LUZuriK8?g_st=ic'>
      <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base text-slate-200 ms:mt-3 md:mt-0" style={{ fontFamily: 'Instagram Sans Bold' }}>Visit Us
        
      </button>
      </a>
    </div>
  </header></div>
  )
}
