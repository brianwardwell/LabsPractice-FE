import React from 'react'

const formStyle = {
    height: 40,
    width: 300
}

const CarForm = () => {
  return (
    <div>
        <select style={formStyle}>
        <option value="volkswagon">Volkswagon</option>
        <option value="Mazda">Mazda</option>
        <option value="Ford">Ford</option>
        </select>
    </div>
  );
};

export default CarForm;
