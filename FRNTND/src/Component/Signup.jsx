import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import './Loginsignup.css'

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Signup() {

    const continuegoogle = async (credentialResponse) => {
        console.log(credentialResponse);
        const jwt_Detail = jwtDecode(credentialResponse.credential);
        console.log(jwt_Detail);

        fetch('http://localhost:2424/googlelogin', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: jwt_Detail.name,
                email: jwt_Detail.email,
                userName: jwt_Detail.userName,
                email_verified: jwt_Detail.email_verified,
                clientId: credentialResponse.clientId
            })

        })
            .then(res => res.json(),
                toast.success("Login successfully..."),
                navigatetologin('/Homepage'))
    }


    const [data, setdata] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
    })

    const navigatetologin = useNavigate();

    const Formsub = async (e) => {
        e.preventDefault();
        const { name, email, password, phone } = data
        try {
            const { data } = await axios.post('/Signup', {
                name, email, password, phone
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setdata({})
                toast.success('SignUp is Successfully....!')
                navigatetologin('/Login')
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="background-container">
                <div className="background-animation">
                    <form className='formsignup' onSubmit={Formsub}>
                        <h1>HD Virtuality</h1>
                        <p>Web-Technologies</p>
                        <h3>Sign Up</h3><br /><br />
                        <input type='text' name='name' className='signinput' placeholder='FULL NAME' value={data.name}
                            onChange={(e) => setdata({ ...data, name: e.target.value })} required /><br /><br />

                        {/*<br />{err ? <span id='errr' style={{color:'red'}}>Invalid name</span> : null}<br />*/}

                        <input type='email' name='email' className='signinput' placeholder='EMAIL ADDRESS' value={data.email}
                            onChange={(e) => setdata({ ...data, email: e.target.value })} required /><br /><br />

                        <input type='password' name='password' className='signinput' placeholder='PASSWORD' value={data.password}
                            onChange={(e) => setdata({ ...data, password: e.target.value })} autoComplete='no' required /><br /><br />

                        {/*<br />{perr ? <span id='errr' style={{color:'red'}}>Invalid password</span> : null}<br />*/}

                        <input type='tel' name='phone' className='signinput' pattern='[0-9]{10}' title='Enter the 10 Digit contact number....!' value={data.phone}
                            onChange={(e) => setdata({ ...data, phone: e.target.value })} placeholder='PHONE NUMBER' required />
                        <br /><br />

                        <button type='submit' className='sbtn' style={{ color: 'black' }}>SUBMIT</button>
                        <br /><br />
                        <p>Already have an account?_<a href='/Login' style={{ textDecoration: 'none', color: 'midnightblue' }}>Login</a></p>

                        {/*GOOGLE LOGIN (start) ---_----------------------------- */}
                        <center>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    continuegoogle(credentialResponse)
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            /></center>
                        {/*GOOGLE LOGIN (end) _---------------------------------- */}

                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup