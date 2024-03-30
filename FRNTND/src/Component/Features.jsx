import React from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import photo5 from '../Img/photo5.png'
import photo6 from '../Img/photo6.png'
import photo7 from '../Img/photo7.png'
import photo8 from '../Img/photo8.png'
import photo9 from '../Img/photo9.png'
import photo10 from '../Img/photo10.png'
import photo11 from '../Img/photo11.png'
import photo12 from '../Img/photo12.png'
import photo13 from '../Img/photo13.png'

import { Footer } from './Footer';
import Navbaar from '../Navbaar';


export const Features = () => {
  return (
    <>
    <Navbaar/>
      <div style={{ backgroundColor: '#040a23' }}>

        <br/>
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
        <br/><br/><br/>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  )
}
