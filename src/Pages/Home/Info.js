import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg'; 
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCart img={clock}></InfoCart>
            <InfoCart img={clock}></InfoCart>
            <InfoCart img={clock}></InfoCart>
        </div>
    );
};

export default Info;