import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import alogin from './alogin.jpg'
import './Admin.css'
import { toast } from 'react-hot-toast';
import {  Outlet, useNavigate } from 'react-router-dom';


export const Admin = () => {


    const [username, setUsername] = useState('');
    const [adminPassword, setadminPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Check if the entered credentials match the fixed login credentials
        if (username === 'Hardik' && adminPassword === '@123') {
            toast.success("Admin login successfully...👍");
            navigate('/dashboard')
        } else {
          toast.error("Admin is Invalid...👎")
        }
      };
    return (
        <>
            <div style={{ marginTop: '-150px' }}>
                <section>
                    <br /><br /><br /><br />
                    <CardGroup style={{ border: 'none' }}>
                        <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
                            <form className='formlogin2' onSubmit={e => {e.preventDefault(); handleLogin();}} >
                                <h1>HD Virtuality</h1>
                                <p>Virtual-Technologies</p><h3>Admin Login</h3>
                                <br />
                                <input type='text' name='username' className='admininput' value={username}
                                onChange={e => setUsername(e.target.value)} placeholder='Enter the registrater email...' required />
                                <br /><br />

                                <input type='password' name='adminPassword' className='admininput' value={adminPassword}
                                onChange={e => setadminPassword(e.target.value)} placeholder='Enter the password...' required />
                                <br /><br />

                                <button type='submit' className='sbtn' name='subbtn' style={{ color: 'black' }}>SUBMIT</button>
                            </form>

                            <img src={alogin} alt='...' width='100%' className='adminimg' />
                        </Card>
                    </CardGroup>
                </section>
            </div>
            <Outlet/>
        </>
    )
}
