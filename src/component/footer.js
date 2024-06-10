import React from 'react'

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font mt-7v" id='footer'>
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a href='https://maps.app.goo.gl/eaMvuceXryZTmfeX7' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <button className='bg-blue-500 p-2 rounded text-xl text-slate-200' >Get Direction</button>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 JSRI Fabrication 
      <p className='text-xl'><b>Phone:</b>+91 9953666009</p>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <p className='text-xl'><b>Email:</b> jsrindustrialfabrication@gmail.com</p>
      </span>
    </div>
  </footer>
  )
}
