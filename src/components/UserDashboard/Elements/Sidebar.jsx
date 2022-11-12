import React from 'react'
import { FaEthereum } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Sidebar = () => {

    const path = window.location.pathname;
    console.log(path);

    return (
        <>
            <div className=" col-lg-3 col-12">
                <div className="side-bar ">
                    <div className='d-flex justify-content-center align-items-center flex-column'>


                        <div className='profile-sec'>
                            <img src="assets/images/pro.png" className='w-100' alt="" />
                        </div>
                        <div className='mt-3 d-flex justify-content-center flex-column text-center' >
                            <p className='text-color fw-bold heading-font fs-5'>Olive Yew</p>
                            <div className='address text-color d-flex gap-2 align-items-center'>
                                <FaEthereum className='text-color fs-5' />
                                0x29D7d1dd5B6...
                            </div>
                            <div className=' mt-2 fs-6 text-color d-flex justify-content-center gap-2 align-items-center'>

                                OliveYew@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 mx-2'>
                        <Link to="/Dashboard" >
                            <div className={path == "/Dashboard" ? "tabs tabs-active" : "tabs"} >
                                Dashboard
                            </div>
                        </Link>
                        <Link to="/Datatable" >
                            <div className={path == "/Datatable" ? "tabs tabs-active" : "tabs"}>

                                Datatable

                            </div>
                        </Link>
                        {/* <button className="btn-global-1  fs-7 mt-lg-0 mt-2">
                  Logout
                </button> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar
