import { t } from 'i18next';
import React from 'react'
import { AiFillStar } from 'react-icons/ai';

const Card = () => {
    return (
        <>
            <div className="a-color2 bottom-card my-4">
                <div className="d-flex gap-2">
                    <AiFillStar className='fs-5 text-warning' />
                    <AiFillStar className='fs-5 text-warning' />
                    <AiFillStar className='fs-5 text-warning' />
                    <AiFillStar className='fs-5 text-warning' />
                    <AiFillStar className='fs-5 text-warning' />
                </div>
                <p className="a-color fs-5 pt-5">
                    {t('great')}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className="mb-0 text-color fw-bold">
                            {t('name')}
                            </p>
                        <p className='heading-font a-color'>
                           {t('developer')}
                            </p>
                    </div>
                    <div>
                        <div className="img-div">
                            <img src="assets/images/pro.png" alt="" />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card