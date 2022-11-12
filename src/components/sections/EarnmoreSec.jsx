import { t } from 'i18next'
import React from 'react'

const EarnmoreSec = () => {
    return (
        <>
            <div className="container position-r">
                <img src="/assets/images/rounded-fan.png" className='rounded-fan-2 d-lg-block d-none' alt="" />

                <div className="center-div d-flex flex-lg-row flex-column justify-content-center">
                    <div className="text-center">
                        <h1 className="text-color">
                           {t('want')}
                            <br className="d-lg-block d-none" /> 
                            {t('on')}
                            </h1>
                        <p className="banner-description mb-0 mt-2">
                            {t('time')}
                            </p>
                        <button className='btn-global'>
                            {t('start')}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EarnmoreSec

