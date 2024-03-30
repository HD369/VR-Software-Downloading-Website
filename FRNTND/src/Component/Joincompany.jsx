import React from 'react'
import '../App.css';

import Carousel from 'react-bootstrap/Carousel';
import { LiaUsersSolid } from "react-icons/lia";
import { MdBorderColor } from "react-icons/md";
import { BsBuildingFillCheck } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import ReactStars from 'react-stars'
import CountUp from 'react-countup';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import p1 from '../Img/p1.jpg'
import p2 from '../Img/p2.png'
import p3 from '../Img/p3.png'


export const Joincompany = () => {

    return (
        <>
            <br /><br />
            {/*______________________________________ Counter section (start) ______________________________________*/}
            <div>
                <h1 className='allsectionheadtext'> Our Population 💁‍♂️ </h1><br /><br />
                <CardGroup style={{ margin: '30px' }}>
                    <Card style={{ backgroundColor: 'transparent' }}>
                        <BsBuildingFillCheck className='countericon' style={{ color: 'lightcoral' }} />
                        <Card.Body>
                            <Card.Text className='counternumbertxt'>
                                <hr /><div className='d-flex justify-content-center'><CountUp end={7495} duration={10} style={{ fontSize: '2rem' }} delay={2} />
                                    {"\t"}<h1>+</h1></div>
                                <h5 >Order's Done</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ backgroundColor: 'transparent' }}>
                        <MdBorderColor className='countericon' style={{ color: 'cornflowerblue' }} />
                        <Card.Body>
                            <Card.Text className='counternumbertxt'>
                                <hr /><div className='d-flex justify-content-center'><CountUp end={5520} duration={10} style={{ fontSize: '2rem' }} delay={2} />
                                    {"\t"}<h1>+</h1></div>
                                <h5 >Our Order's</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ backgroundColor: 'transparent' }}>
                        <LiaUsersSolid className='countericon' style={{ color: 'aquamarine' }} />
                        <Card.Body>
                            <Card.Text className='counternumbertxt'>
                                <hr /><div className='d-flex justify-content-center'><CountUp end={2580} duration={10} style={{ fontSize: '2rem' }} delay={2} />
                                    {"\t"}<h1>+</h1></div>
                                <h5 >Member's</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ backgroundColor: 'transparent' }}>
                        <FcLike className='countericon' />
                        <Card.Body>
                            <Card.Text className='counternumbertxt'><hr />
                                <div className='d-flex justify-content-center'>
                                    <CountUp end={7550} duration={10} style={{ fontSize: '2rem' }} />
                                    {"\t"}<h1>+</h1></div>
                                <h5 >User Like's</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardGroup>
            </div><br />
            {/*______________________________________ Counter section (end) ______________________________________*/}

            {/*______________________________________ Testimonials section (start) ______________________________________*/}
            <br /><br />
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

        </>
    )
}
