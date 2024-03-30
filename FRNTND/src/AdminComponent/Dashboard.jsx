import React from 'react'
import './Admin.css';
import Navbaradmin from './Navbaradmin';

import Card from 'react-bootstrap/Card';
import CountUp from 'react-countup';

import { useState } from 'react';
import { Line } from "react-chartjs-2";
import { Chart, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';

Chart.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement
)




export const Dashboard = () => {

  const [data, setData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: 'Total Views',
        data: [10, 50, 100, 150, 200, 50, 120, 300, 180, 400, 300, 500],
        backgroundColor: 'red',
        borderColor: 'blue',
        tension: 0.5
      },
      {
        label: 'Total Enquiry',
        data: [10, 50, 150, 250, 100, 120, 50, 350, 280, 100, 200, 400],
        backgroundColor: 'yellow',
        borderColor: 'green',
        tension: 0.5,
      }
      ,
      {
        label: 'Pay Month',
        data: [0, 10, 150, 50, 200, 300, 350, 250, 200, 320, 350, 450],
        backgroundColor: '#5F4B8BFF',
        borderColor: '#E69A8DFF',
        tension: 0.5,
      },
      {
        label: 'Pay Year',
        data: [1, 5, 10, 50, 150, 220, 150, 250, 330, 200, 270, 300],
        backgroundColor: 'orange',
        borderColor: '#00A4CCFF',
        tension: 0.5,
      }
    ]
  })


  return (
    <>
      <Navbaradmin />

      {/*_______________________________________ Card Section (start) __________________________________________ */}
      <div className='dashboard_firstcard_container'>
        <div className='dashboard_firstcard'>
          <h3>Total Views</h3>
          <hr />
          <div className='d-flex'><CountUp end={500} duration={10} style={{ fontSize: '3rem' }} delay={2} />{"\t"}<h1>+</h1></div>
        </div>
        <div className='dashboard_secondcard'>
          <h3>Total Enquiry</h3>
          <hr />
          <div className='d-flex'><CountUp end={400} duration={10} style={{ fontSize: '3rem' }} delay={2} />{"\t"}<h1>+</h1></div>
        </div>
        <div className='dashboard_thirdcard'>
          <h3>Software Download</h3>
          <hr />
          <div className='d-flex'><CountUp end={200} duration={10} style={{ fontSize: '3rem' }} delay={2} />{"\t"}<h1>+</h1></div>
        </div>
        <div className='dashboard_fourcard'>
          <h3>Happy Customer</h3>
          <hr />
          <div className='d-flex'><CountUp end={200} duration={10} style={{ fontSize: '3rem' }} delay={2} />{"\t"}<h1>+</h1></div>
        </div>
      </div>
      <div className='dashboard_secondcard_container'>
        <div className='dashboard_firstcard1'>
          <h3>Pay Month</h3>
          <hr />
          <div className='d-flex'><CountUp end={200} duration={10} style={{ fontSize: '3rem' }} delay={2} />{"\t"}<h1>+</h1></div>
        </div>
        <div className='dashboard_secondcard2'>
          <h3>Pay Yaer</h3>
          <hr />
          <div className='d-flex'><CountUp end={200} duration={10} style={{ fontSize: '3rem' }} delay={2} />{"\t"}<h1>+</h1></div>
        </div>
        <div className='dashboard_thirdcard3'>
          <h3>Total Income (static)</h3>
          <hr />
          <div className='d-flex'><CountUp end={200} duration={10} style={{ fontSize: '3rem' }} delay={2} />{"\t"}<h1>+</h1></div>
        </div>
        <div className='dashboard_fourcard4'>
          <h3>Active User (static)</h3>
          <hr />
          <div className='d-flex'><CountUp end={200} duration={10} style={{ fontSize: '3rem' }} delay={2} />{"\t"}<h1>+</h1></div>
        </div>
      </div>
      {/*_______________________________________ Card Section (end) __________________________________________ */}

      <br /><br /><br /><br />
      {/*_______________________________________ Graph Section (start) __________________________________________ */}
      <h1 className='text-center fs-1' style={{ color: 'rgb(38, 120, 213)' }}>Current Position</h1>
      <center>
        <Card className='border-0 m-2 p-5 chartcss' style={{ backgroundColor: '#e2e7fe', borderRadius: '70px', width: '70%' }}>
          <Line data={data} />
        </Card>
      </center>

      <br /><br />
      <h1 className='text-center fs-1' style={{ color: 'rgb(38, 120, 213)' }}>Website Description</h1>
      <Card className='border-0 p-4 m-4 chartcss' style={{ backgroundColor: '#e2e7fe', borderRadius: '30px' }}>
        <p>Welcome to HD_Virtuality, your premier destination for all things virtual reality! Dive into a realm where imagination meets innovation as we bring you the latest and greatest VR experiences right to your fingertips.

          Discover a vast library of cutting-edge VR software tailored to suit every taste and preference. Whether you're a gaming enthusiast seeking adrenaline-pumping adventures, an architectural designer exploring immersive environments, or an educator revolutionizing learning through VR, our platform has something for everyone.

          Explore our intuitive interface designed to make your journey seamless and enjoyable. Browse through categories ranging from gaming and entertainment to education and productivity, effortlessly finding the perfect VR applications to suit your needs.

          At [HD_Virtuality], we prioritize quality and safety above all else. Rest assured that every software featured on our platform undergoes rigorous screening to ensure a secure and enjoyable experience for our users. From AAA game titles to innovative educational tools, each offering is vetted to meet the highest standards of excellence.

          Experience the future today with our convenient download options. Whether you're using Oculus Rift, HTC Vive, PlayStation VR, or any other leading VR headset, our platform supports a wide range of devices, ensuring compatibility and accessibility for all VR enthusiasts.

          Stay informed and engaged with our vibrant community of VR enthusiasts. Join discussions, share experiences, and connect with like-minded individuals passionate about the endless possibilities of virtual reality.

          Embark on an unforgettable journey into the immersive world of VR with [HD_Virtuality]. Start exploring, start downloading, and unlock boundless realms of imagination with just a click.

          Welcome to the future of virtual reality—welcome to [HD_Virtuality].</p>
      </Card>
      {/*_______________________________________ Graph Section (end) __________________________________________ */}

    </>
  )
}
