import React, { useState, useContext } from 'react';

import MainCarInfo from 'react';
import Chart from '../chart';

const SingleCarPage = () => {
    const [details, setDetails] = useState({});
    const [chartData, setChartData] = useState({});

    return (
        <div>
            <MainCarInfo details = {details} />
            <Chart chartData = {chartData} />
        </div>
    );
};

export default SingleCarPage;