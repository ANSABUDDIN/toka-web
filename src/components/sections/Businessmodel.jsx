import { t } from 'i18next'
import React from 'react'

const Businessmodel = () => {
    return (
        <>
            <div className='banner container my-lg-5 py-3 py-lg-5' style={{borderBottom:"0px"}}>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 p-2 p-lg-5 text-lg-start text-center">
                        <div className='d-flex justify-content-lg-start justify-content-center gap-2'>
                            <span className=" fs-0 text-color heading-font fw-bold">
                                {t('business')} 
                                </span>
                            <span className='gradient'>
                                <span className=" fs-0 heading-font fw-bold">
                                    {t('model')}
                                    </span>
                            </span>

                        </div>
                        <p className='banner-description mb-0 mt-2'>
                            {t('invest')}
                        </p>
                        <button className='btn-global-2 mt-4'>
                            {t('Learn')}
                        </button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 position-r">
                        {/* <img src="/assets/images/rounded-fan.png" className='rounded-fan d-lg-block d-none' alt="" /> */}

                        <img src="assets/images/hand-with-ball.png" className='img-fluid' alt="" />
                        <img src="assets/images/squre-bcak-hand.png" className='back-img-2 img-fluid' alt="" />

                    </div>

                </div>
            </div>
        </>
    )
}

export default Businessmodel