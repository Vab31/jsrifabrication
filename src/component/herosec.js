import React from 'react'
import './herocss.css'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (
  <Popover id="popover-basic" style={{width:'500px'}}>
    <Popover.Header as="h3">Contact</Popover.Header>
    <Popover.Body>
      <p className='' style={{fontSize:'14px',fontWeight:'bold'}}><b>Email:</b> <br/> jsrindustrialfabrication@gmail.com</p>
      <p style={{fontSize:'14px',fontWeight:'bold'}}><b>Phone:</b><br/>+91 95182-79999, 01274-295129</p>
    </Popover.Body>
  </Popover>
);

export default function Herosec() {
  return (
    <div className='app flex flex-col justify-center items-center h-screen' id='hero'>
<div className='bg-blue-500 p-3  mb-3 rounded text-slate-200 font-bold text-3xl' style={{ fontFamily: 'Instagram Sans Bold' }} >Jai Shree Ram Industrial Fabrication
<br/>
<p className='text-xl font-thin'>
All type MildSteel and Stainless Steel Fabrication
<br/>
Opening at 08:00 am
</p>

</div>


{/* <button className='bg-blue-200 mt-4 p-3 rounded hover:bg-blue-400 text-xl text-gray-900 font-bold'  style={{ fontFamily: 'Instagram Sans Regular' }}>Contact</button> */}
<OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button variant="primary" className='font-bold bg-blue-500 p-2 text-xl'>Contact</Button>
  </OverlayTrigger>

    </div>
  )
}
