import './App.css';
import React from 'react';
import Login from './Component/Login'
import Signup from './Component/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbaar from './Navbaar';
import Homepage from './Component/Homepage';
import { Pricing } from './Component/Pricing';
import { Features } from './Component/Features';
import { Lerning } from './Component/Resources/Lerning';
import { Helpcenter } from './Component/Resources/Helpcenter'
import { Aboutus } from './Component/Detail company/Aboutus';
import { Contactus } from './Component/Detail company/Contactus'
import { Privacypolicy } from './Component/Detail company/Privacypolicy';
import { Dashboard } from './AdminComponent/Dashboard'

import pg404 from './Img/pg404.png'

import { UsercontextProvider } from './Component/Context/Usercontext';
import { Paymuser } from './Component/Context/Paymuser';
import { Payyuser } from './Component/Context/Payyuser';

import { GoogleOAuthProvider } from '@react-oauth/google';

import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { Admin } from './AdminComponent/Admin';
import Navbaradmin from './AdminComponent/Navbaradmin';
import { Contactdetail } from './AdminComponent/Contactdetail';
import { Paymonth } from './AdminComponent/Paymonth';
import { Payyear } from './AdminComponent/Payyear';
import { Pricedetailyear } from './Component/Pricedetailyear';
import { Pricedetailmonth } from './Component/Pricedetailmonth';
import { Success } from './Component/Success';
import { Cancel } from './Component/Cancel';

import { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";


axios.defaults.baseURL = 'http://localhost:2424'
axios.defaults.withCredentials = true

function App() {

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])


  return (

    <UsercontextProvider>

      <GoogleOAuthProvider clientId="1051117532273-h4bighqk67g2p6qedtdnsbab0knsdj35.apps.googleusercontent.com">

        <div className="App">
        {loading
          ? <center><BounceLoader
            color={'#0079cf'}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
            className='loadr'
          /></center>:
          <BrowserRouter>
            {/*<Navbaar/>*/}
            <Toaster position='top-center' toastOptions={{ duration: 2000 }} />
            <Routes>
              <Route path='/Login' element={<Login />} />
              <Route path='/Homepage' element={<Homepage />} />
              <Route path='/' element={<Signup />} />
              <Route path='/Pricing' element={<Pricing />} />
              <Route path='/Features' element={<Features />} />
              <Route path='/Lerning' element={<Lerning />} />
              <Route path='/Helpcenter' element={<Helpcenter />} />
              <Route path='/Aboutus' element={<Aboutus />} />
              <Route path='/Contactus' element={<Contactus />} />
              <Route path='/Privacypolicy' element={<Privacypolicy />} />
              <Route path='/Admin' element={<Admin />} ></Route>
              <Route path='/Dashboard' element={<Dashboard />} />
              <Route path='/Navbaradmin' element={<Navbaradmin />} />
              <Route path='/Contactdetail' element={<Contactdetail />} />
              <Route path='/Paymonth' element={<Paymuser><Paymonth /></Paymuser>} />
              <Route path='/Payyear' element={<Payyuser><Payyear /></Payyuser>} />
              <Route path='/Pricedetailyear' element={<Pricedetailyear />} />
              <Route path='/Pricedetailmonth' element={<Pricedetailmonth />} />
              <Route path='SAJDJKJDFHKJBCA_KAVALajksdkj12313_skdjlakdj_nsdkaslskdjlak_aldskjcbshd_vadvandc64byw_g8736vsahdvq9f' element={<Success />} />
              <Route path='Cancle' element={<Cancel />} />
              <Route path='*' element={<div><center><img src={pg404} alt='...' width='30%' /><br /><h1>Page Not Found!</h1></center></div>} />
            </Routes>
          </BrowserRouter>
        } 
        </div>

      </GoogleOAuthProvider>

    </UsercontextProvider>

  );
}

export default App;
