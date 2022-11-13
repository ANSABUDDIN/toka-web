import React from 'react'
import { useTranslation  } from "react-i18next";

const Banner = () => {

  const {t} = useTranslation();
    return (
        <>
            <section className='banner pt-100'>
                <div className="container">
                    <div className="row align-items-center">
                        {/* text-lg-start text-center */}
                        <div className="col-lg-6 col-md-6 col-12 position-r text-lg-start text-center ">
                            <img src="/assets/images/rounded-fan.png" className='rounded-fan d-lg-block d-none' alt="" />
                            <span className='gradient'>
                                {/* <p className='banner-title'>discover how to earn more</p> */}
                                <p className='banner-title'>{t('discover')}</p>
                            </span>
                            <p className='mb-0 banner-heading fw-bolder  heading-font'>
                                {/* Predict  */}
                                {t('predict')}
                                <br />
                                {/* crypto  */}
                                {t('crypto')}
                                <br  />
                                {t('markets')}
                            </p>
                            <p className='banner-description mb-0 mt-2'>

                                {t('connect')}
                            </p>

                            <button className='btn-global'>
                                {t('disbtn')}
                            </button>
                            <div className="d-flex  justify-content-center justify-content-lg-start  gap-3 mt-5">
                                <div className='d-flex align-items-center gap-2'>
                                    <p className='fs-4 heading-font fw-900 mb-0 text-color'>
                                        {t('2m')}
                                        </p>
                                    <p className='mb-0 text-gray fs-7 fw-600'>
                                        {t('active')}
                                        </p>
                                </div>
                                <span className='line'></span>
                                <div className='d-flex align-items-center gap-2'>
                                    <p className='fs-4 heading-font fw-900 mb-0 text-color'>
                                        4.8
                                        </p>
                                    <p className='mb-0 text-gray fs-7 fw-600'>
                                        {t('rating')}
                                        </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6 col-12 position-r ">
                            <img src="/assets/images/crypto-bg-img.png" className='img-fluid mt-lg-5 mt-3 pt-lg-5' alt="" />
                            <div className='coin-btn-div d-lg-flex d-none floating'>
                                <img src="/assets/images/bitcoin-01.png" className='coin-btn' alt="" />
                                <img src="/assets/images/lite.png" className='coin-btn mb-5' alt="" />
                                {/* <img src="/assets/images/bitcoin-01.png" className='coin-btn mb-5' alt="" /> */}
                                <img src="/assets/images/ether.png" className='coin-btn' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner