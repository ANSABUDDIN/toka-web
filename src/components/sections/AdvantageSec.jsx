import { t } from 'i18next'
import React from 'react'
import BallCard from '../elements/BallCard'

const AdvantageSec = () => {
    return (
        <>
            <div className="container position-r my-5">
                <img src="/assets/images/rounded-fan.png" className='rounded-fan-2 d-lg-block d-none' alt="" />

                <div className="center-div  d-flex flex-column justify-content-center">
                    <div className="text-center">
                        <div className='d-flex justify-content-center gap-2'>
                            <h1 className="text-color">
                                {t('main')}
                                </h1>
                            <span className='gradient'>

                                <h1 className="text-light">
                                        {t('advantage')}
                                    </h1>
                            </span>
                        </div>
                        <p className="banner-description mb-0 mt-2">
                            {t('connect')}
                            </p>
                        <div className="row">
                            <div className="col-4">

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <BallCard />
                        <BallCard />
                        <BallCard />
                        <BallCard />
                        <BallCard />
                        <BallCard />
                        
                    </div>
                </div>
            </div>


        </>
    )
}

export default AdvantageSec