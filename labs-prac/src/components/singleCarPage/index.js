import React, { useState, useContext } from './node_modules/react';

import MainCarInfo from './node_modules/react';
import Chart from '../Chart';

const SingleCarPage = () => {
    const [details, setDetails] = useState({});
    const [chartData, setChartData] = useState({});
    // add context to setState

    return (
        <div>
            <MainCarInfo details = {details} />
            <Chart chartData = {chartData} />
        </div>
    );
};

export default SingleCarPage;