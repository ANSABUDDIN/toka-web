import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Header from './elements/Header';

const Register = () => {
    const [toogle, settoogle] = useState(true)
  return (
    <>
    <Header />
     <section className='banner my-height pt-100'>
                <div className="container">
                    <div className="row align-items-center">

                        {/* text-lg-start text-center */}
                        <div className="col-lg-6 col-md-6 col-12 position-r ">
                            <img src="/assets/images/rounded-fan.png" draggable={false} className='rounded-fan d-lg-block d-none' alt="" />


                            <span className='gradient '>
                                <p className='mb-0 banner-heading fw-bolder  heading-font'>
                                    Register .
                                </p>
                            </span>
                            <div className='my-5 w-100 col-12'>
                                <div className='input-text '>
                                    <span className='gradient'>
                                        <p className='fs-5 fw-600 capitalize mb-1 heading-font'>Enter Username</p>
                                    </span>
                                    <input type="text" className='input-style border-bottom' placeholder='Username' />

                                </div>
                                <div className='input-text mt-3 '>
                                    <span className='gradient'>
                                        <p className='fs-5 fw-600 capitalize mb-1 heading-font'>Enter Email Address</p>
                                    </span>
                                    <input type="Email" className='input-style border-bottom' placeholder='Email' />

                                </div>
                                <div className='input-text mt-3'>
                                    <div className='d-flex justify-content-between align-items-center w-100 '>
                                        <div className='gradient'>
                                            <p className='fs-5 fw-600 capitalize mb-1 heading-font'>Enter Password</p>

                                        </div>
                                        {/* <div>
                                            <p className='fs-7 fw-600 capitalize mb-1 pointer text-pink heading-font'>Forget Password ?</p>
                                        </div> */}
                                    </div>
                                    <div className='password-div border-bottom'>

                                        <input type={toogle == false ? "text" : "password"} className='input-style' placeholder='Password' />
                                        <span className='pointer' onClick={() => settoogle(!toogle)}>

                                            {
                                                toogle == true ? <AiOutlineEye className='fs-4 text-pink' /> : <AiOutlineEyeInvisible className='fs-4 text-pink' />
                                            }
                                        </span>
                                    </div>

                                </div>
                                <button className='btn-global mt-4'>
                                    Register
                                </button>

                                <div className='mt-5 text-start'>
                                    <p className='fs-6 fw-600 capitalize text-light mb-1 heading-font'>You Have Already An Acoount ? <span className='text-pink pointer'>
                                       <Link to="/login"> Login .</Link>
                                        </span> </p>
                                </div>
                            </div>




                        </div>
                        <div className="col-lg-6 col-md-6 col-12 d-lg-block d-none ">
                            <img src="/assets/images/banner-img.png" className='img-fluid mt-lg-5 pt-lg-5' alt="" />
                        </div>
                    </div>
                </div>
            </section> 
    </>
  )
}

export default Register
