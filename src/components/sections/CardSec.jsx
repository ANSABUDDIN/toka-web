import { t } from 'i18next';
import React from 'react'
import Card from '../elements/Card';
const CardSec = () => {
    return (
        <>
            <section className="pt-5 text-light mb-4">
                <div className="container">
                    <div className="text-light">
                        <div className='d-flex  justify-content-center gap-2'>
                            <h1 className='fw-bold  heading-font text-color'>
                                {t('hear')}
                                 </h1>
                            <span className='gradient '>
                                <h1 className='fw-bold heading-font'>
                                    {t('clients')}
                                </h1>
                            </span>
                        </div>
                        <div className='text-center'>
                            <p className="a-color pt-3 ">
                               {t('connect')}</p>
                        </div>
                    </div>
                    <div className="d-flex gap-lg-5 gap-2 flex-lg-row flex-column">
                        <Card />
                        <Card />


                    </div>
                    <div className="d-flex gap-lg-5 gap-1  flex-lg-row flex-column">
                        <Card />
                        <Card />


                    </div>


                </div>
            </section>
        </>
    )
}

export default CardSec