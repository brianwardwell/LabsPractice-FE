import React, { useState, useContext } from './node_modules/react';

import MainCarInfo from '../MainCarInfo';
import ComparisonCarInfo from '../ComparisonCarInfo';
import Chart from '../Chart';

const ComparePage = () => {
    const [mainCar, setMainCar] = useState({});
    const [comparisonCar, setComparisonCar] = useState({});
    const [chartData, setChartData] = useState([]);
    // add context to setState

    setChartData([...chartData, mainCar, comparisonCar])

    return (
        <div>
            <div>
                <MainCarInfo details = {mainCar} />
                <ComparisonCarInfo details = {comparisonCar} />
            </div>
            <div>
                <Chart chartData = {chartData} />
            </div>
        </div>
    );
};

export default ComparePage;