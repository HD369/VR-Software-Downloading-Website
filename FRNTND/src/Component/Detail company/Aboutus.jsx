import React from 'react'
import './Detail.css'
import '../Resources/Resorc.css'
import photo1 from './photo1.jpg'

import icon1 from '../../Img/icon1.png';
import icon2 from '../../Img/icon2.png';
import icon3 from '../../Img/icon3.png';
import icon4 from '../../Img/icon4.png';
import icon5 from '../../Img/icon5.png';
import icon6 from '../../Img/icon6.png';
import icon7 from '../../Img/icon7.png';
import icon8 from '../../Img/icon8.png';
import Marquee from "react-fast-marquee"
import photo11 from './photo11.png'

import { Footer } from '../Footer'
import Navbaar from '../../Navbaar';

import p1 from '../../Img/p1.jpg'
import p2 from '../../Img/p2.png'
import p3 from '../../Img/p3.png'
import ReactStars from 'react-stars'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import { LiaUsersSolid } from "react-icons/lia";
import { MdBorderColor } from "react-icons/md";
import { BsBuildingFillCheck } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import CountUp from 'react-countup';




export const Aboutus = () => {
  return (
    <>
      <Navbaar />
      <div style={{ backgroundColor: '#040a23' }}>

        <Card className="bg-dark text-white " style={{ border: 'none' }}>
          <Card.Img src={photo1} alt="..." className='aboutimg ' />
          <Card.ImgOverlay>
            <Card.Text className='text-center textabout homeheadertxt1'>
              <h1>ABOUT US</h1>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <div>
          <br /><br /><br />
          <h1 className='allsectionheadtext'> Our users✨ </h1><br />
          <Marquee style={{ backgroundColor: '#08123d' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ margin: '50px' }}><img src={icon1} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Nikom</h3></div>
              <div style={{ margin: '50px' }}><img src={icon2} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Meta</h3></div>
              <div style={{ margin: '50px' }}><img src={icon3} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Samsung</h3></div>
              <div style={{ margin: '50px' }}><img src={icon4} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Microsoft</h3></div>
              <div style={{ margin: '50px' }}><img src={icon5} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Unity</h3></div>
              <div style={{ margin: '50px' }}><img src={icon6} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>AMD</h3></div>
              <div style={{ margin: '50px' }}><img src={icon7} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Apple</h3></div>
              <div style={{ margin: '50px' }}><img src={icon8} alt='nikom' className='img1' /><h3 style={{ color: 'white' }}>Matterport</h3></div>
            </div>
          </Marquee>
        </div><br /><br />


        <Card className=" text-white  " style={{ border: 'none', backgroundColor: '#040a23' }}>
          <center><img src={photo11} alt="..." style={{ width: '50%' }} className='div2' /></center>
          <Card.Text className='text-center textabout' style={{ marginTop: '-20%' }}>
            <h1 className='p1'>Always in good <br />Company</h1>
            <br />
            <p style={{ color: 'white' }}>Throughout it all, we’ve traveled far and wide and connected with some amazing individuals<br />
              who have been instrumental in shaping our team, our product,<br />
              as well as our business as a whole.</p>
          </Card.Text>
        </Card>
        <br /><br /><br />



        {/*______________________________________ Counter section (start) ______________________________________*/}
        <div>
          <h1 className='allsectionheadtext'> Our Population 💁‍♂️ </h1><br /><br />
          <CardGroup style={{ margin: '30px' }}>
            <Card style={{ backgroundColor: 'transparent' }}>
              <BsBuildingFillCheck className='countericon' style={{ color: 'lightcoral' }} />
              <Card.Body>
                <Card.Text className='counternumbertxt'>
                  <hr /><div className='d-flex justify-content-center'>
                    <CountUp end={7495} duration={10} style={{ fontSize: '2rem' }} delay={2} />{"\t"}<h1>+</h1>
                  </div>
                  <h5 >Order's Done</h5>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: 'transparent' }}>
              <MdBorderColor className='countericon' style={{ color: 'cornflowerblue' }} />
              <Card.Body>
                <Card.Text className='counternumbertxt'>
                  <hr /><div className='d-flex justify-content-center'>
                  <CountUp end={5520} duration={10} style={{ fontSize: '2rem' }} delay={2} />{"\t"}<h1>+</h1>
                  </div>
                  <h5 >Our Order's</h5>
                  
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: 'transparent' }}>
              <LiaUsersSolid className='countericon' style={{ color: 'aquamarine' }} />
              <Card.Body>
                <Card.Text className='counternumbertxt'>
                  <hr /><div className='d-flex justify-content-center'>
                  <CountUp end={2580} duration={10} style={{ fontSize: '2rem' }} delay={2} />{"\t"}<h1>+</h1>
                  </div>
                  <h5 >Member's</h5>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: 'transparent' }}>
              <FcLike className='countericon' />
              <Card.Body>
                <Card.Text className='counternumbertxt'><hr />
                <div className='d-flex justify-content-center'>
                  <CountUp end={7550} duration={10} style={{ fontSize: '2rem' }} />{"\t"}<h1>+</h1>
                  </div>
                  <h5 >User Like's</h5>
                </Card.Text>
              </Card.Body>
            </Card>

          </CardGroup>
        </div><br />
        {/*______________________________________ Counter section (end) ______________________________________*/}




        {/*______________________________________ Testimonials section (start) ______________________________________*/}
        <br /><br /><br />
        <h1 className='allsectionheadtext'> Our Testimonials 🙋 </h1>
        <Carousel style={{ fontFamily: 'sans-serif' }} className='div1 testimonialsback'>
          <Carousel.Item style={{ marginTop: '50px' }} >
            <Card className="text-center bg-transparent">
              <Card.Body>
                <img src={p1} alt='...' width='11%' height='auto' style={{ borderRadius: '30px' }} className='testimonials' />
                <br /><br />
                <Card.Title style={{ color: 'white' }}>Foram cresy</Card.Title>
                <ReactStars className='star'
                  count={5}
                  size={24}
                  color={'yellow'}
                  value={4}
                />
                <Card.Text style={{ color: 'white' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                </Card.Text>
                <br />
              </Card.Body>
            </Card>
          </Carousel.Item>

          <Carousel.Item style={{ marginTop: '50px' }}>
            <Card className="text-center bg-transparent">
              <Card.Body>
                <img src={p2} alt='...' width='10%' style={{ borderRadius: '30px' }} className='testimonials' />
                <br /><br />
                <Card.Title style={{ color: 'white' }}>Devid shah</Card.Title>
                <ReactStars className='star'
                  count={5}
                  size={24}
                  color={'yellow'}
                  value={5}
                />
                <Card.Text style={{ color: 'white' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <br />
              </Card.Body>
            </Card>
          </Carousel.Item>

          <Carousel.Item style={{ marginTop: '50px' }}>
            <Card className="text-center bg-transparent">
              <Card.Body>
                <img src={p3} alt='...' width='10%' style={{ borderRadius: '30px' }} className='testimonials' />
                <br /><br />
                <Card.Title style={{ color: 'white' }}>Riya Shrma</Card.Title>
                <ReactStars className='star'
                  count={5}
                  size={24}
                  color={'yellow'}
                  value={3.5}
                />
                <Card.Text style={{ color: 'white' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <br />
              </Card.Body>
            </Card>
          </Carousel.Item>

        </Carousel>
        <br /><br />
        {/*______________________________________ Testimonials section (end) ______________________________________*/}

        <br /><br />


        <Footer />

      </div>
    </>
  )
}