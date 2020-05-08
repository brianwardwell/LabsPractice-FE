import React, { useState, useContext } from 'react';

import MainCarInfo from '../mainCarInfo';
import ComparisonCarInfo from '../comparisonCarInfo';
import Chart from '../chart';

const ComparePage = () => {
    const [mainCar, setMainCar] = useState({});
    const [comparisonCar, setComparisonCar] = useState({});
    const [chartData, setChartData] = useState([]);

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