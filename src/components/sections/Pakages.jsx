import { t } from 'i18next'
import React from 'react'

const Pakages = () => {
    return (
        <>
            <div className="container position-r my-5">
                <img src="/assets/images/rounded-fan.png" className='rounded-fan-2 d-lg-block d-none' alt="" />

                <div className="center-div  d-flex flex-column justify-content-center">
                    <div className="text-center">
                        <div className='d-flex justify-content-center gap-2'>
                            <h1 className="text-color">
                               {t('Our')}
                                </h1>
                            <span className='gradient'>

                                <h1 className="text-light">
                                    {t('packages')}
                                    </h1>
                            </span>
                        </div>
                        <p className="banner-description mb-0 mt-2">
                           {t('connect')}
                            </p>
                        
                    </div>
                    <div className='d-lg-flex d-block gap-4 justify-content-center'>


                        <div className="col-lg-4  col-12 my-3">

                            <div className="card pakage-card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <span className=''>
                                        <h4 className="my-0 fw-bold heading-font fs-1 ">
                                            {t('basic')}
                                            </h4>
                                    </span>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title heading-font">
                                        $15<small className="text-pink fw-light ">
                                            {t('/mo')}
                                        </small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li className='text-light fs-7'>
                                            {t('20')}
                                            </li>
                                        <li className='text-light fs-7'>
                                            {t('10')}
                                            </li>
                                        <li className='text-light fs-7'>
                                            {t('Priority')}
                                            </li>
                                        <li className='text-light fs-7'>
                                            {t('help')}
                                            </li>
                                    </ul>
                                    <button type="button" className="w-100  btn-global-1">
                                       {t('Buy')}
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-12 my-3">

                            <div className="card pakage-card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                <span className='gradient'>
                                        <h4 className="my-0 fw-bold fs-1 heading-font ">
                                            {t('Pro')}
                                            </h4>
                                    </span>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title heading-font">
                                        $30<small className="text-pink fw-light ">
                                            {t('/mo')}
                                            </small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li className='text-light fs-7'>{t('20')}</li>
                                        <li className='text-light fs-7'>{t('10')}</li>
                                        <li className='text-light fs-7'>{t('Priority')}</li>
                                        <li className='text-light fs-7'> {t('help')}</li>
                                    </ul>
                                    <button type="button" className="w-100  btn-global-1">
                                    {t('Buy')}
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Pakages