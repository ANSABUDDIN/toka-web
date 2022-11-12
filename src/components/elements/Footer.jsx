import React from 'react'

const Footer = () => {
    return (
        <>
            <section className="text-light pt-5 mt-5 footer-bg">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-4 col-12 pt-lg-0 pt-5">
                            <div className="text-lg-start text-start">
                                <h3 className="fw-700">Toka</h3>
                                <p className="footer-description">
                                    Reinventing the way of creating websites, we aim to <br /> create the most
                                    master-peaced WordPress theme <br /> available  on the market.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 pt-lg-0 pt-5">
                            <div className="text-lg-start text-start">
                                <div className='d-flex gap-2'>
                                    <span className='green-line'></span>
                                    <p className="fw-bold fs-7 mb-2">CONTACT US</p>
                                </div>
                                <p className=" pt-2">202 Helga Springs Rd, Crawford, TN 38554</p>
                                <p className="">
                                    Call Us: <span className="fw-600"> 800.275.8777 </span>
                                </p>
                                <p className="">alex@company.com</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 pt-lg-0 pt-5">
                            <div className="text-lg-start text-start">
                                <div className='d-flex gap-2'>
                                    <span className='green-line'></span>
                                    <p className="fw-bold fs-7 mb-2">SIGN UP FOR EMAIL UPDATES</p>
                                </div>
                                <div className="input-div d-flex justify-content-between mt-3">
                                    <input
                                        type="email"
                                        className="w-50 py-3 input-field"
                                        placeholder="Your e-mail address"
                                    />
                                    <button className="btn-global-3 fw-500 d-lg-block d-none">Subscirbe</button>
                                </div>
                                <div className='text-center mt-3'> 
                                    <button className="btn-global-3 fw-500 w-100 d-lg-none d-block">Subscirbe</button>
                                </div>
                                <p className="pt-3">
                                    Sign up with your email address to receive news and
                                    <br className="d-lg-block d-none" /> updates
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex flex-lg-row flex-column justify-content-between align-items-center py-3 ">
                        <div>
                            <p className="fw-500 mb-0 text-muted fs-7">
                                Copyright ©2022 Toka. All rights reserved.
                            </p>
                        </div>
                        <div className="d-flex gap-lg-4 justify-content-center mt-lg-0 mt-4 flex-wrap gap-3 ">
                            <div className="fs-8 fw-bold pointer">Home</div>
                            <div className="fs-8 fw-bold pointer ">About Us</div>
                            <div className="fs-8 fw-bold pointer">Our Team</div>
                            <div className="fs-8 fw-bold pointer">Shop</div>
                            <div className="fs-8 fw-bold pointer">Blog</div>
                            <div className="fs-8 fw-bold pointer">Contact Us</div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Footer