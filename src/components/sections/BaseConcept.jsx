import { t } from 'i18next'
import React from 'react'

const BaseConcept = () => {
    return (
        <>
            <div  style={{borderBottom:"0px"}} className='banner container my-lg-5 py-lg-5 py-3'>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 position-r">
                        <img src="/assets/images/rounded-fan.png" className='rounded-fan d-lg-block d-none' alt="" />

                        <img src="assets/images/hand-coin-2.png" className='img-fluid floating' alt="" />
                        {/* <img src="assets/images/round-back-hand.png" className='back-img img-fluid' alt="" /> */}

                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-lg-5 p-2 text-lg-start text-center">
                        <div className='d-flex gap-2 justify-content-lg-start justify-content-center '>
                            <span className="text-color fs-0 heading-font fw-bold">
                                {t('base')}
                                </span>
                            <span className='gradient'>
                                <span className=" fs-0 heading-font fw-bold">
                                    {t('concept')}
                                    </span>
                            </span>

                        </div>
                        <p className='banner-description mb-0 mt-2'>

                            {t('invest')}
                        </p>
                        <button className='btn-global'>
                            {t('disbtn')}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BaseConcept