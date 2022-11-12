import React from 'react'
import Header from '../elements/Header'

import LineChart from '../Charts/LineChart';
import Sidebar from './Elements/Sidebar';
const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="screen col-lg-9 col-12 ">
            <div className=' '>
              <div className="row mb-3 mt-lg-0 mt-3">
                <div className="col-lg-3 col-12 ">
                  <div className="my-bg-card d-flex align-items-center gap-2">
                    <img src="assets/images/bitcoin-01.png" className='coin-dash-image ' alt="" />
                    <p className='mb-0 fs-1 fw-bold heading-font text-color'>Btc</p>
                  </div>
                </div>
                <div className="col-lg-3 col-12">
                  <div className="my-bg-card d-flex align-items-center gap-2">
                    <img src="assets/images/ether.png" className='coin-dash-image ' alt="" />
                    <p className='mb-0 fs-1 fw-bold heading-font text-color'>Eth</p>
                  </div>
                </div>
                <div className="col-lg-3 col-12">
                  <div className="my-bg-card d-flex align-items-center gap-2">
                    <img src="assets/images/Lite.png" className='coin-dash-image ' alt="" />
                    <p className='mb-0 fs-1 fw-bold heading-font text-color'>Lite</p>
                  </div>
                </div>
                <div className="col-lg-3 col-12">
                  <div className="my-bg-card d-flex align-items-center gap-2">
                    <img src="assets/images/bitcoin-01.png" className='coin-dash-image ' alt="" />
                    <p className='mb-0 fs-1 fw-bold heading-font text-color'>BTC</p>
                  </div>
                </div>
              </div>
              <div className='my-bg-card '>
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
