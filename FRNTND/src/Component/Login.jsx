import './Loginsignup.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';


export default function Login() {


    const [data, setdata] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();
    const signupweb = async (e) => {
        e.preventDefault();
        const { email, password } = data
        try {
            const { data } = await axios.post('/Login', {
                email,
                password
            });
            if (data.error) {
                toast.error(data.error)
            }
            else {
                setdata({});
                toast.success('Login is Successfully....!')
                navigate('/Homepage')
            }
        } catch (error) {

        }

    }
    return (
        <>
            <div style={{ marginTop: '-150px' }}>
                <section>
                    <form className='formlogin' method='' onSubmit={signupweb} >
                        <h1>HD Virtuality</h1>
                        <p>Virtual-Technologies</p><h3>Login</h3>
                        <br /><br />

                        <input type='email' name='email' className='logininput' placeholder='Enter the registrater email...' value={data.email}
                            onChange={(e) => setdata({ ...data, email: e.target.value })} required />
                        <br /><br />

                        <input type='password' name='password' className='logininput' placeholder='Enter the password...' value={data.password}
                            onChange={(e) => setdata({ ...data, password: e.target.value })} autoComplete='yes' required />
                        <br /><br />

                        {/* <a href='google.com' style={{ textDecoration: 'none', color: 'midnightblue' }}>Forgot Password?</a><br /><br />*/}
                        <button type='submit' className='sbtn' name='subbtn' style={{ color: 'black' }}>SUBMIT</button>
                        <br /><br />

                        <p>Dont's have an account?_<a href='/' style={{ textDecoration: 'none', color: "midnightblue" }}>Signup</a></p>


                    </form>
                    <div class='air air1'></div>
                    <div class='air air2'></div>
                    <div class='air air3'></div>
                    <div class='air air4'></div>
                </section>
            </div>
        </>
    );
}


