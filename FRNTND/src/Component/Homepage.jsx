import React from 'react';
import '../App.css';
import { FaMicrosoft } from "react-icons/fa";

import { Joincompany } from './Joincompany';
import { Footer } from './Footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Marquee from "react-fast-marquee";

import photo2 from '../Img/photo2.png';
import access from '../Img/access.png';
import access2 from '../Img/access2.jpg';
import icon1 from '../Img/icon1.png';
import icon2 from '../Img/icon2.png';
import icon3 from '../Img/icon3.png';
import icon4 from '../Img/icon4.png';
import icon5 from '../Img/icon5.png';
import icon6 from '../Img/icon6.png';
import icon7 from '../Img/icon7.png';
import icon8 from '../Img/icon8.png';

import { FaRupeeSign } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi2";
import photo14 from '../Img/photo14.png'
import photo15 from '../Img/photo15.png'

import photo5 from '../Img/photo5.png'
import photo6 from '../Img/photo6.png'
import photo7 from '../Img/photo7.png'
import photo8 from '../Img/photo8.png'
import photo9 from '../Img/photo9.png'
import photo10 from '../Img/photo10.png'
import photo11 from '../Img/photo11.png'
import photo12 from '../Img/photo12.png'
import photo13 from '../Img/photo13.png'

import Navbaar from '../Navbaar';



export default function Homepage() {
  return (
    <>
    <Navbaar/>
      <div style={{ backgroundColor: '#040a23', marginTop: '-25px' }}>
        <br /><br />
        <div>
          <img src={photo2} alt='...' width='30%' className='homeheaderimage' />
          <div className='homeheadertext homeheadertxt1'>
            <h1>HD virtuality</h1>
            <h4>Felling like real world experience.</h4>
            <br />
            <p style={{ fontFamily: 'sans-serif' }}>Virtual Reality (VR) is a computer-generated environment with scenes and objects that <br />
              appear to be real,
              making the user feel they are immersed in their surroundings.</p>
          </div>
          <div id='cube-container' >
            <div className="face top"></div>
            <div className="face right"></div>
            <h4 id='body1'>Box information</h4>
            <div className="face bottom"></div>
            <div className="face left"></div>
            <div className="face back"></div>
            <div className="face front"></div>
          </div>
        </div>
        <br /><br />

        {/*__________________________ OUR USER section (start) _________________________________________________*/}
        <div style={{ marginTop: '15%' }}>
          <h1 className='allsectionheadtext'> Our users✨ </h1><br />
          <Marquee style={{ backgroundColor: '#08123d' }}>
            <div style={{ display: 'flex', fontFamily: 'sans-serif', textAlign: 'center' }}>
              <div style={{ margin: '50px' }}><img src={icon1} alt='nikom' className='img1' />  <h3 style={{ color: 'white' }}>Nikom</h3></div>
              <div style={{ margin: '50px' }}><img src={icon2} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Meta</h3></div>
              <div style={{ margin: '50px' }}><img src={icon3} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Samsung</h3></div>
              <div style={{ margin: '50px' }}><img src={icon4} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Microsoft</h3></div>
              <div style={{ margin: '50px' }}><img src={icon5} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Unity</h3></div>
              <div style={{ margin: '50px' }}><img src={icon6} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>AMD</h3></div>
              <div style={{ margin: '50px' }}><img src={icon7} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Apple</h3></div>
              <div style={{ margin: '50px' }}><img src={icon8} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Matterport</h3></div>
            </div>
          </Marquee>
        </div>
        {/*__________________________ OUR USER section (end) _________________________________________________*/}
        <br /><br /><br />


        {/*__________________________ Accessories section (start) _________________________________________________*/}
        <div>
          <CardGroup style={{ margin: '30px' }}>
            <Card style={{ backgroundColor: 'transparent' }} >
              <img variant="top" src={access} width='80%' alt='...' className='infomationsection1 homeheadertxt1' />
            </Card>
            <Card style={{ backgroundColor: 'transparent' }}>
              <Card.Body>
                <Card.Text className='text-start text-light mt-5'>
                  <h4 style={{ color: '#0073CF' }}>Accessories are free for paid versions!</h4><hr />
                  <p>All Accessories are free for any purchase package.<br />
                    Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, making the user feel they are
                    immersed in their surrounding. This environment is perceived through a device known as a Virtual reality headset or helmet.
                    <br />Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, making the user feel they are
                    immersed in their surrounding. This environment is perceived through a device known as a Virtual reality headset or helmet.
                    Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, making the user feel they are
                    immersed in their surrounding. This environment is perceived through a device known as a Virtual reality headset or helmet.
                    <br />
                  </p>
                  <a href='/Pricing' className="btn btn-warning" >Purchase & Download on Windows store <FaMicrosoft className='text-blue' /></a>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        {/*__________________________ Accessories section (end) _________________________________________________*/}
        <br /><br /><br />


        {/*__________________________ Features section (start) _________________________________________________*/}
        <div style={{ backgroundColor: '#040a23' }}>

          <br />
          <h2 className='allsectionheadtext'> Access these awesome features!🎧🥽 </h2>
          <br />


          <CardGroup style={{ margin: '30px' }}>
            <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
              <center><img variant="top" src={photo5} width='40%' alt='...' className='div2' /></center>
              <Card.Body>
                <Card.Text className='text-light text-center'>
                  Connect to a Web Expert in real-time through a Hololens 2.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
              <center><img variant="top" src={photo6} width='40%' alt='...' className='div2' /></center>
              <Card.Body>
                <Card.Text className='text-light text-center'>
                  Web Experts can share their desktop view or camera.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
              <center><img variant="top" src={photo7} width='40%' alt='...' className='div2' /></center>
              <Card.Body>
                <Card.Text className='text-light text-center'>
                  HoloLens 2 users can share their real-time view.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>


          <CardGroup style={{ margin: '30px' }}>
            <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
              <center><img variant="top" src={photo8} width='40%' alt='...' className='div2' /></center>
              <Card.Body>
                <Card.Text className='text-light text-center'><br />
                  Web Experts can chat in real-time with HoloLens 2 users.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
              <center><img variant="top" src={photo9} width='40%' alt='...' className='div2' /></center>
              <Card.Body>
                <Card.Text className='text-light text-center'>
                  Web Experts can take real-time captures of the HoloLens 2 view, and add annotations & drawings.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
              <center><img variant="top" src={photo10} width='40%' alt='...' className='div2' /></center>
              <Card.Body>
                <Card.Text className='text-light text-center'>
                  Web Experts can share local images, along with annotations & drawings.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>


          <CardGroup style={{ margin: '30px' }}>
            <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
              <center><img variant="top" src={photo11} width='40%' alt='...' className='div2' /></center>
              <Card.Body>
                <Card.Text className='text-light text-center'>
                  Both Web Experts and HoloLens 2 users can toggle on & off the audio or video stream.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
              <center><img variant="top" src={photo12} width='40%' alt='...' className='div2' /></center>        <Card.Body>
                <Card.Text className='text-light text-center'>
                  HoloLens 2 users can move the Web Expert view chat freely in their environment.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
              <center><img variant="top" src={photo13} width='40%' alt='...' className='div2' /></center>        <Card.Body>
                <Card.Text className='text-light text-center'>
                  Multiple HoloLens 2 users can be connected to one, or many Web Experts.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <br /><br /><br />
        </div>
        {/*__________________________ Features section (end) _________________________________________________*/}
        <br /><br />


        {/*__________________________ Information section (start) _________________________________________________*/}
        <div>
          <CardGroup style={{ margin: '30px' }}>

            <Card style={{ backgroundColor: 'transparent' }}>
              <Card.Body>
                <Card.Text className='text-start text-light mt-5'>
                  <h4 style={{ color: '#0073CF' }}>Wondering how all of this actually works?</h4><hr />
                  <p>All Accessories are free for any purchase package.<br />
                    Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, making the user feel they are
                    immersed in their surrounding. This environment is perceived through a device known as a Virtual reality headset or helmet.
                    <br />Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, making the user feel they are
                    immersed in their surrounding. This environment is perceived through a device known as a Virtual reality headset or helmet.
                    Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, making the user feel they are
                    immersed in their surrounding. This environment is perceived through a device known as a Virtual reality headset or helmet.
                    <br />
                  </p>
                  <a href='/Pricing' className="btn btn-warning" >Purchase & Download on Windows store <FaMicrosoft className='text-blue' /></a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor: 'transparent' }} >
              <img variant="top" src={access2} width='80%' alt='...' className='infomationsection2 homeheadertxt1' />
            </Card>
          </CardGroup>
        </div>
        {/*__________________________ Information section (end) _________________________________________________*/}
        <br /><br />


        {/*__________________________ Pricing section (start) _________________________________________________*/}
        <div style={{ backgroundColor: '#040a23' }}><br /><br />

          <h1 className='allsectionheadtext'> Our pricing 💰 </h1>

          <CardGroup style={{ margin: '30px' }}>
            <Card style={{ backgroundColor: '#08123d', borderRadius: '20px' }} className='price' >
              <center> <img variant="top" src={photo14} width='40%' alt='...' /></center>
              <Card.Body >
                <Card.Text className='text-center text-light'>
                  <h4 style={{ color: 'Highlight' }}>Monthly</h4>
                  <hr />
                  <p className="card-text">
                    <FaRupeeSign style={{ margin: '0px 3px 20px', fontSize: '25px' }} /><span style={{ fontSize: '200%' }}>6142{"\t"}-</span>
                    {"\t"}Per Month</p><p>All Accessories are free for any purchase package.<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href='/Pricing' className='btn btn-warning' style={{ width: '50%' }}>Purchase now <HiChevronDoubleRight /></a>
                </Card.Text>
              </Card.Body>  
            </Card>

            <Card style={{ backgroundColor: '#08123d', borderRadius: '20px' }} className='price'>
              <center> <img variant="top" src={photo15} width='40%' alt='...' /></center>
              <Card.Body>
                <Card.Text className='text-center text-light'>
                  <h4 style={{ color: '#0073CF' }}>Annually</h4><hr />
                  <p className="card-text">
                    <FaRupeeSign style={{ margin: '0px 3px 20px', fontSize: '20px' }} /><span style={{ fontSize: '200%' }}>12,284{"\t"}-</span>
                    {"\t"} Per Year</p><p>All Accessories are free for any purchase package.<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href='/Pricing' className='btn btn-warning' style={{ width: '50%' }}>Purchase now <HiChevronDoubleRight /></a>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <br /><br /><br />

        </div>
        {/*__________________________ Pricing section (end) _________________________________________________*/}
        <br /><br />

        {/*__________________________ Testimonials and counter section (start) _________________________________________________*/}
        <Joincompany />
        {/*__________________________ Testimonials and counter section (end) _________________________________________________*/}


        {/*__________________________ Footer section (start) _________________________________________________*/}
        <Footer />
        {/*__________________________ Footer section (end) _________________________________________________*/}

      </div>

    </>
  )
}
