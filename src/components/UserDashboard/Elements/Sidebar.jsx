import React from 'react'
import { AiOutlineDashboard, AiOutlineMail, AiOutlineSetting } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';
import { SiBinance } from 'react-icons/si';
import { ImSwitch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
const Sidebar = () => {

    const path = window.location.pathname;
    console.log(path);

    


    return (
        <>
            <div className="side-bar close flex-column " >

                <div className='d-flex justify-content-center align-items-center flex-column '>


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
                    {/* <button className="btn-global-1  fs-7 mt-lg-0 mt-2">
                  Logout
                </button> */}
                </div>
            </div>
        </>
    )
}

export default Sidebar
