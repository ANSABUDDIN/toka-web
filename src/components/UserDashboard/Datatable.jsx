import React from 'react';
import Header from '../elements/Header';
import LineChart from '../Charts/LineChart';
import Sidebar from './Elements/Sidebar';
import Table from './Elements/MyTable';

const Datatable = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <div className="screen col-lg-9 col-12 ">
                        <div className=' '>
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Datatable
