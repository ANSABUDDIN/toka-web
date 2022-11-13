import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Header from './elements/Header';
const Forget = () => {
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
                                    Forget Password .
                                </p>
                            </span>
                            <div className='my-5 w-100 col-12'>

                                <div className='input-text mt-3 '>
                                    <span className='gradient'>
                                        <p className='fs-5 fw-600 capitalize mb-1 heading-font'>Enter Email Address</p>
                                    </span>
                                    <input type="Email" className='input-style border-bottom' placeholder='Email' />

                                </div>

                                <button className='btn-global mt-4'>
                                    Reset
                                </button>
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

export default Forget
