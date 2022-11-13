import React from 'react'
import { AiOutlineMail, AiOutlineSetting } from 'react-icons/ai'
import { MdNotificationsNone } from 'react-icons/md'
import { BiFullscreen, BiMenu, BiSearch } from 'react-icons/bi'
const DashHeader = () => {
    return (
        <div className='d-flex dashheader justify-content-between align-items-center'>

            <BiFullscreen className='fs-4 pointer d-lg-flex d-none ' />

            <BiMenu className='fs-1 text-pink d-lg-none d-flex' />


            <div className='d-flex align-items-center gap-4'>
                <div className='searchBox d-lg-flex d-none'>
                    <input type="text" />
                    <BiSearch className='text-dark fs-4' />
                </div>
                <div className='position-r pointer' >
                    <span className='notification-an'></span>
                    <MdNotificationsNone className='fs-4' />
                </div>
                <div className='position-r pointer '>
                    <span className='notification-an'></span>
                    <AiOutlineMail className='fs-4' />
                </div>
                <div className='position-r pointer'>
                    {/* <span className='notification-an'></span> */}
                    <AiOutlineSetting className='fs-4 rotate' />

                </div>
            </div>
        </div >
    )
}

export default DashHeader
