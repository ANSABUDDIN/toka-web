import { t } from 'i18next'
import React from 'react'

const Platform = () => {
    return (
        <>
            <div className="container position-r my-over">
                {/* <img src="/assets/images/rounded-fan.png" className='rounded-fan-2 d-lg-block d-none' alt="" /> */}
                <img src="assets/images/5side-round.png" className=' squre-img' alt="" />
                <div className="center-div-2 d-flex align-items-center flex-lg-row flex-column justify-content-between">
                    <div className="text-start">
                        <h1 className="text-light">
                            {t('register')}</h1>
                        <p className="banner-description text-dark mb-0 mt-2">It is an exciting time to become a trader.</p>

                    </div>
                    <div className=''>
                        
                        <button className='btn-global-4'>
                            {t('start')}
                        </button>
                    </div>
                    {/* <div className='background-orgin'>
                            <img src="assets/images/5side-round.png" className=' squre-img' alt="" />
                        </div> */}
                </div>
            </div>
        </>
    )
}

export default Platform
