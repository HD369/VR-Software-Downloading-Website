import React, { useContext, useEffect } from 'react';
import Navbaradmin from './Navbaradmin';
import { Usercontext2 } from '../Component/Context/Payyuser'; // Adjust the import path accordingly

import Table from 'react-bootstrap/Table';


import './Admin.css'

export const Payyear = () => {
    const { usery, setUsery } = useContext(Usercontext2);

    useEffect(() => {
        if (usery) {
            const currentDate = new Date();
            const oneYearLater = new Date();
            oneYearLater.setFullYear(currentDate.getFullYear() + 1);

            const timeDifference = oneYearLater.getTime() - currentDate.getTime();
            if (timeDifference <= 0) {
                // If one month has already passed
                setUsery(true);
            }
        }
        else {
            console.log("errror")
        }
    })

    return (
        <>
            <Navbaradmin />
            <div>
                <br />
                <h1 className='text-center ypaycss'>YEARLY PLAN PURCHASE DETAILS</h1>
                <br />
                <Table responsive="sm" className='text-center' >
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE-NUMBER</th>
                            <th>AADHAR-NUMBER</th>
                            <th>CITY</th>
                            <th>STATE</th>
                            <th>COUNTRY</th>
                        </tr>
                    </thead>
                    <br/>
                    <tbody>
                        {
                            usery.map(items => (
                                <tr key={items._id}>
                                    <td className='text-success'>{items.yname}</td>
                                    <td className='text-success'>{items.yemail}</td>
                                    <td className='text-success'>{items.ynumber}</td>
                                    <td className='text-success'>{items.yanumber}</td>
                                    <td className='text-success'>{items.ycity}</td>
                                    <td className='text-success'>{items.ystate}</td>
                                    <td className='text-success'>{items.ycountry}</td>
                                    <td className='border-0'>
                                        {usery ? <p style={{ backgroundColor: "lightgreen", borderRadius: '30px' }}>Active</p> : <p style={{ backgroundColor: "grey", borderRadius: '30px', color: 'white' }}>Disable</p>}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </>
    );
};
