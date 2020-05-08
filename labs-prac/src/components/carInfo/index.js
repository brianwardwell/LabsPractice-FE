import React from './node_modules/react';

const CarInfo = ({ make, model, year, type }) => {
    return (
        <div>
            <h2>{year} {make} {model} <span>{type}</span></h2>
        </div>
    );
};

export default CarInfo;