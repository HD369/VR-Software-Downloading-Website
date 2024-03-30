import React, { useEffect } from 'react'
import Navbaradmin from './Navbaradmin'

import { useContext } from "react";
import { Usercontext1 } from '../Component/Context/Paymuser';

import Table from 'react-bootstrap/Table';

export const Paymonth = () => {

    const { userm, setUserm } = useContext(Usercontext1);

    // const [cdate, setCdate] = useState(new Date());

    useEffect(() => {
        if (userm) {
            const currentDate = new Date();
            const oneMonthLater = new Date();
            oneMonthLater.setMonth(currentDate.getMonth() + 1);

            const timeDifference = oneMonthLater.getTime() - currentDate.getTime();
            if (timeDifference <= 0) {
                // If one month has already passed
                setUserm(true);
            }
        }
        else {
            console.log("errror")
        }
    })



    return (
        <>
            <Navbaradmin />
            <div className=''>
                <br />
                <h1 className='text-center ypaycss'>MONTHLY PLAN PURCHASE DETAILS</h1>
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
                    <br />
                    <tbody>
                        {
                            userm.map(item => (
                                <tr key={item._id}>
                                    <td className='text-success'>{item.pname}</td>
                                    <td className='text-success'>{item.pemail}</td>
                                    <td className='text-success '>{item.pnumber}</td>
                                    <td className='text-success '>{item.panumber}</td>
                                    <td className='text-success '>{item.pcity}</td>
                                    <td className='text-success '>{item.pstate}</td>
                                    <td className='text-success '>{item.pcountry}</td>
                                    <td className='text-success'>
                                        {userm ? <p style={{ backgroundColor: "lightgreen", borderRadius: '30px' }}>Active</p> : <p style={{ backgroundColor: "grey", borderRadius: '30px', color: 'white' }}>Disable</p>}
                                    </td>
                                    <td className='text-success'><p style={{ backgroundColor: "grey", borderRadius: '30px', color: 'white' }}>Disable</p></td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}
