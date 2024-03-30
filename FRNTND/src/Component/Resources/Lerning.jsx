import React from 'react'
import learnphoto from './learnphoto.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Resorc.css';
import ReactPlayer from "react-player"
import { CiCircleChevRight } from "react-icons/ci";
import { Footer } from '../Footer';
import Navbaar from '../../Navbaar';



export const Lerning = () => {
  return (
    <>
    <Navbaar/>
      <div style={{ backgroundColor: '#040a23'}}>
        <br />
        <div>
        <CardGroup style={{ margin: '30px' }}>
          
          <Card style={{ backgroundColor: 'transparent' }}>
            <Card.Body>
              <Card.Text className='text-start text-light mt-5'>
                <h1 style={{ color: 'white' }}>Courses & Tutorials</h1>
            <h5 style={{ color: 'white' }}>If you have questions or concerns — whether big or small — this section<br /> 
            will help you learn everything there is to know about VR!</h5>
            <br/>
            <p>Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, 
            making the user feel they are immersed in their surrounding. This environment is perceived through a device known as a 
            Virtual reality headset or helmet.Virtual reality(VR) is a computer - generated environment with scenes
             and objects that appear to be real, making the user feel they are immersed in their surrounding. This environment 
             is perceived through a device known as a Virtual reality headset or helmet. Virtual reality(VR) is a computer - generated
              environment with scenes and objects that appear to be real, making the user feel they are immersed in their surrounding.
               This environment is perceived through a device known as a Virtual reality headset or helmet.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ backgroundColor: 'transparent' }} >
            <img variant="top" src={learnphoto} width='80%' alt='...' className='learnimg homeheadertxt1' />
          </Card>
        </CardGroup>
      </div>


        <div style={{ color: 'white' }}>
          <br /><br />
          <div style={{ justifyContent: 'right', marginTop: '10%' }} >
            <h1 style={{
              textAlign: 'left',
              marginLeft: '20px'
            }}>The basics : Getting started with StellarX Software!</h1><hr style={{ borderColor: 'white' }} />
            <div className='div4'>
              <ReactPlayer url="https://youtu.be/X4lgfIldj4E?si=9LlAzpJCOOIadfTx" width="30%" style={{ marginLeft: '25px' }} />
              <ReactPlayer url="https://youtu.be/gDlMH5olAQs?si=dm3-LeySXA8o-V24" width="30%" style={{ marginLeft: '25px' }} />
              <ReactPlayer url="https://youtu.be/x-TgyU38igI?si=o0FT_KzRDJTmU36d" width="30%" style={{ marginLeft: '25px' }} />
            </div>
          </div><br />


          <div style={{ justifyContent: 'right', marginTop: '10%' }} >
            <h1 style={{
              textAlign: 'left',
              marginLeft: '20px'
            }}>Tutorials : StellarX features</h1><hr style={{ borderColor: 'white' }} />
            <div className='div4'>
              <ReactPlayer url="https://youtu.be/Zd9Iaci7AJc" width="30%" style={{ marginLeft: '25px' }} />
              <ReactPlayer url="https://youtu.be/t741jSW6Rxs" width="30%" style={{ marginLeft: '25px' }} />
              <ReactPlayer url="https://youtu.be/sxAgZ2sSsug" width="30%" style={{ marginLeft: '25px' }} />
            </div>
            <div className='div4'>
              <ReactPlayer url="https://youtu.be/lFaX3XkNktg" width="30%" style={{ marginLeft: '25px' }} />
              <ReactPlayer url="https://youtu.be/E7gm5eu6q2k" width="30%" style={{ marginLeft: '25px' }} />
            </div><br/><br/>


            <div className='lernmore'><br/>
            <h2 style={{ color: 'white' }}>See all our tutorials on YouTube!{"\t"}
            <a href='https://www.youtube.com/@stellarxai' className="btn btn-outline-warning " > 
            Watch now <CiCircleChevRight style={{fontSize:'30px'}} /> </a></h2><br/>
            </div>
          </div><br /><br />
        </div>
        <Footer/>
      </div>
    </>
  )
}
