import React, { useState } from 'react'
import img from './mapimg.PNG'
 

export default function Map({ location, zoomLevel }) {
    
  return (
    <div id='visit'>
    <h2 className="map-h2 text-3xl mb-3">Come Visit Us At Our Place</h2>
    <div className="map justify-center items-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="google-map">
      <a href='https://maps.app.goo.gl/8FMvSMRpGCBCc1Vw8'>
        <img src={img} alt='Near Jai Mata Filling Station Petrol Pump Chandpur Ki Dhani, Bawal Road, Rewari' />
      </a>
    </div>
  </div>
  </div>
  )
}
