import React, {useContext} from './node_modules/react';

import CarInfo from '../CarInfo';

const ComparisonCarInfo = ({ c02, repairCost, lifetime }) => {
    const results = {replace: 'context goes here'}
    return (
        <div>
            <CarInfo car = {results} />
        </div>
    )
}

export default ComparisonCarInfo;