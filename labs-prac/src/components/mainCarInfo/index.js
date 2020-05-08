import React, { useContext } from 'react';

import carInfo from '../carInfo';

const MainCarInfo = ({ c02, repairCost, lifetime }) => {
    const results = {replace: 'context goes here'}
    return (
        <div>
            <carInfo car = {results} />
        </div>
    )
}

export default MainCarInfo;