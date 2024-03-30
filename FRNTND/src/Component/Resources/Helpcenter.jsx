import React from 'react'
import help from './help.png'
import './Resorc.css';
import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';
import '../../App.css';
import { AiFillAliwangwang } from "react-icons/ai";
import { MdNotStarted } from "react-icons/md";
import { MdAttractions } from "react-icons/md";
import { GrAttraction } from "react-icons/gr";
import { GiSteampunkGoggles } from "react-icons/gi";
import { BsCollectionFill } from "react-icons/bs";
import { CiCircleChevRight } from "react-icons/ci";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { Footer } from '../Footer';
import Navbaar from '../../Navbaar';




export const Helpcenter = () => {

  const steps = [
    {
      id: '0',
      message: 'hi buddy nice to meet you!',
      trigger: '1',
    }, 
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, How are you!,Please enter a your problem!',
      trigger: '4',
    },
    {
      id: '4',
      user: true,
      trigger: '5',
    },
    {
      id: '5',
      message: 'Thank you, I will solve your problem anyware! ',
      end: true,
    },
  ];

  const theme = {
    background: '#27454a',
    headerBgColor: '#27a4ec',
    headerFontSize: '20px',
    botBubbleColor: '#1a2932',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
  };

  const config = {
    floating: true,
  };


  return (
    <>
    <Navbaar/>
      <div style={{ backgroundColor: '#040a23' }}>
        <Card style={{ backgroundColor: '#040a23' }}>
          <center><Card.Img variant="top" src={help} style={{ width: '50%' }} className=' div4 homeheadertxt1' /></center>
          <Card.Body>
            <Card.Text>
              <h1 style={{ color: 'white', textAlign: 'center' }}> Welcome to HD for VR Support and Help center👋 </h1>
            </Card.Text>
          </Card.Body>
        </Card>


        <CardGroup style={{ margin: '30px' }}>
          <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
            <Card.Body>
              <Card.Text className='text-light text-center'>
                <AiFillAliwangwang className="card-img-top div2" style={{ fontSize: '200px' }} />
                <h3 className="card-text" ><b>The Basics support 🙃</b></h3>
                <p className="card-text">The support for Tutorials and Understanding the Technology!</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
            <Card.Body>
              <Card.Text className='text-light text-center'>
                <MdNotStarted className="card-img-top div2 " style={{ fontSize: '200px' }} />
                <h3 className="card-text" ><b>Getting Started 💫</b></h3>
                <p className="card-text" >Any starting problem in this Software Technology!</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
            <Card.Body>
              <Card.Text className='text-light text-center'>
                <MdAttractions className="card-img-top div2" style={{ fontSize: '200px' }} />
                <h3 className="card-text"><b>Actions 🏃🏽‍♂️</b></h3>
                <p className="card-text" >Voice assist, Actions, Control panel, Menu, etc.!</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>


        <CardGroup style={{ margin: '30px' }}>
          <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
            <Card.Body>
              <Card.Text className='text-light text-center'><br />
                <GrAttraction className="card-img-top div2" style={{ fontSize: '200px' }} />
                <h3 className="card-text"><b>Basecamp ⛺️</b></h3>
                <p className="card-text" >Basecamp, Avatars, Spaces, Save, Downloads etc.!</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
            <Card.Body>
              <Card.Text className='text-light text-center'>
                <GiSteampunkGoggles className="card-img-top div2 " style={{ fontSize: '200px' }} />
                <h3 className="card-text"><b>Virtual Wearables 🧦</b></h3>
                <p className="card-text" >XR Watch!</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ backgroundColor: '#08123d', borderRadius: '20px', margin: '10px' }}>
            <Card.Body>
              <Card.Text className='text-light text-center'>
                <BsCollectionFill className="card-img-top div2" style={{ fontSize: '200px' }} />
                <h3 className="card-text"><b>The Collections 💎</b></h3>
                <p className="card-text" >Collections, Import assists, 3D Assets, Creating Assets, etc.!</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>


        <div className='lernmore' style={{ backgroundColor: '#040a23' }}><br />
          <h2 style={{ color: 'white' }}>Contact Our Helpcenter!{"\t"}
            <a href='/Contactus' className="btn btn-outline-warning " >
              Contact now! <CiCircleChevRight style={{ fontSize: '30px' }} /> </a></h2><br />
        </div>

      </div>

      <Footer />


      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="HD Virtuality"
          // speechSynthesis={{ enable: false, lang: 'en' }}
          steps={steps}
          {...config}
        />
      </ThemeProvider>

    </>
  )
}
