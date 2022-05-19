import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://polar-anchorage-20509.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data)
                });
        }
    }, [user])
    return (
        <div>
            <h2 className='text-center text-2xl m-2'>My Appointment: {appointments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, i) =>
                                <tr key={a._id}>
                                    <th>{i + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.treatment}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>
                                        {(a.price && !a.paid) &&
                                            <Link to={`/dashboard/payment/${a._id}`}>
                                                <button className='btn btn-xs btn-success'>Pay</button>
                                            </Link>
                                        }
                                        {(a.price && a.paid) &&
                                            <div>
                                                <p className='text-success'>Paid</p>
                                            </div>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;