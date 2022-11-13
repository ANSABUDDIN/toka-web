import React, { useState } from 'react'
import Header from '../elements/Header'
import { AiOutlineDashboard, AiOutlineMail, AiOutlineSetting } from 'react-icons/ai';
import { FaEthereum, FaTimes } from 'react-icons/fa';
import { SiBinance } from 'react-icons/si';
import { ImSwitch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { MdNotificationsNone } from 'react-icons/md'
import { BiFullscreen, BiSearch } from 'react-icons/bi'
import LineChart from '../Charts/LineChart';
import MyTable from './Elements/MyTable';
import DashHeader from './Elements/DashHeader';
import SliderSec from './SliderSec';
const Dashboard = () => {
  const path = window.location.pathname;
  console.log(path);
  const [toogle, settoogle] = useState(true)



  return (
    <>
      <div className="bg-dashboard d-lg-flex d-block position-r">
        <div className="w-20">
          <div className={toogle == true ? "side-bar  close" : "side-bar  open"} >

            <div className='d-flex justify-content-center align-items-center flex-column '>
<Link to="/">
<h2 class="  text-pink heading-font pb-3 capitalize fw-bold">Whales <span class="text-light"> Alerts</span></h2>

</Link>

              <div className='profile-sec'>
                <img src="assets/images/pro.png" className='w-100' alt="" />
              </div>
              <div className='mt-3 d-flex justify-content-center flex-column text-center' >
                <p className='text-light mb-0 fw-bold heading-font fs-5'>Olive Yew</p>
                <div className='address text-light d-flex gap-3 justify-content-center mt-2 align-items-center'>
                  {/* <FaEthereum className='text-light fs-5' />
                0x29D7d1dd5B6... */}
                  <AiOutlineSetting className='pointer fs-5' />
                  <AiOutlineMail className='pointer fs-5' />
                  <ImSwitch className='pointer fs-5' />
                </div>
                {/* <div className=' mt-2 fs-6 text-color d-flex justify-content-center gap-2 align-items-center'>

                OliveYew@gmail.com
            </div> */}
              </div>
            </div>
            <div className='mt-4 mx-2'>
              <Link to="/Dashboard" >
                <div className={path == "/Dashboard" ? "tabs tabs-active" : "tabs"} >
                  <AiOutlineDashboard className='fs-4' />   Dashboard
                </div>
              </Link>
              <Link to="/Datatable" >
                <div className={path == "/Datatable" ? "tabs tabs-active" : "tabs"}>

                  <SiBinance className='fs-4' /> Binance Future Bot

                </div>
              </Link>

            </div>
          </div>

        </div>
        <div className="w-80">
          <div className='d-flex dashheader justify-content-between align-items-center'>

            <BiFullscreen className='fs-4 pointer d-lg-flex d-none ' />
            <div className='d-lg-none d-flex' onClick={() => settoogle(!toogle)}>
              {
                toogle == true ?
                  <BiMenu className='fs-1 text-pink ' />
                  :
                  <FaTimes className='fs-1 text-pink ' />
              }
            </div>


            <div className='d-flex align-items-center gap-4'>
              <div className='searchBox d-lg-flex d-none'>
                <input type="text" />
                <BiSearch className='text-dark fs-4' />
              </div>
              <div className='position-r pointer' >
                <span className='notification-an'></span>
                <MdNotificationsNone className='fs-4' />
              </div>
              <div className='position-r pointer '>
                <span className='notification-an'></span>
                <AiOutlineMail className='fs-4' />
              </div>
              <div className='position-r pointer'>
                {/* <span className='notification-an'></span> */}
                <AiOutlineSetting className='fs-4 rotate' />

              </div>
            </div>
          </div >
         
          <div className='p-3'>
            <div className='bg-dash rounded-3 p-lg-3 p-0'>
              <MyTable />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
