import React from 'react';
import doctor from '../../assets/images/doctor.png';
import Appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${Appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold' >Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, officia commodi! Tenetur nesciunt reprehenderit laboriosam architecto corrupti quaerat aliquam eaque adipisci commodi, odio temporibus dolor! Quos ratione, inventore eum molestias corrupti quasi? Sed quis reprehenderit voluptatem ipsa? Sunt, explicabo iusto?</p>
                <PrimaryButton>Get Strated</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;