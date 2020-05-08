import React from 'react';

const carInfo = ({ make, model, year, type }) => {
    return (
        <div>
            <h2>{year} {make} {model} <span>{type}</span></h2>
        </div>
    );
};

export default carInfo;