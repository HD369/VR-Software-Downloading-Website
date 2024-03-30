import React,{useState} from 'react'
import './Detail.css'
import '../Resources/Resorc.css'
import '../../App.css';
import photo12 from './photo12.jpg'
import o1 from '../../Img/o1.jpeg'
import Card from 'react-bootstrap/Card';
import { Footer } from '../Footer';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Navbaar from '../../Navbaar';




export const Contactus = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
});

const handleChange = (e) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:2424/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      console.log('Email sent successfully!');
    } else {
      console.error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

  return (
    <>
    <Navbaar/>
      <div style={{ backgroundColor: '#040a23' }}>

        <Card className="bg-dark text-white " style={{ border: 'none' }}>
          <Card.Img src={photo12} alt="..." style={{ height: '500px' }} className='aboutimg' />
          <Card.ImgOverlay>
            <Card.Text className='text-center textabout homeheadertxt1'>
              <h1>CONTACT US</h1>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>


        <br /><br />

        {/*--------------------------------------------- Profile Section (start) ----------------------------------------------------- */}
        <h1 className='allsectionheadtext'> Meet our owner 🤴</h1><br />
        <div class="card mb-3" style={{ maxwidth: "540px", backgroundColor: '#08123d' }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={o1} class="img-fluid rounded-start homeheadertxt1" alt="..." width='70%' style={{ margin: '20%', borderRadius: '150px' }} />
            </div>
            <div class="col-md-8">
              <div class="card-body text-light">
                <h2 class="card-title card-title1">DANGODARA HARDIK M.</h2><br />
                <h5 class="card-text card-text1">Web designer & Developer</h5><br />
                <p class="card-text card-text1">
                  <b style={{ color: 'rgb(247, 208, 111)' }}>HELLO, I AM HARDIK FOR BCA WEB DESIGNER/DEVELOPMENT STUDENT</b><br />

                  I am a web developer. which has given me the latest skills and knowledge in the web development platform.
                  I also worked as a web developer, where I learned practical skills in building websites for clients.<br />

                  My focus is on designing and developing websites that look great and work well.
                  I am skilled in a range of programming languages and platforms, including HTML, CSS, JavaScript, PHP, and React JS.
                  I have worked on websites for different college projects.<br />

                  I enjoy working with other web developers and designers to make websites that match the client's brand and business objectives.
                  I am committed to keeping up with the latest industry trends and best practices, and I attend professional web development courses to improve my skills.
                  <br />

                  I am also side Designer for Logo's. So, If you need a LOGO you can also contact with me...<br /><br />
                  <ul className='d-flex justify-content-around'>
                    <li>HTML & CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>Node JS</li>
                    <li>MongoDB</li>
                    <li>MySql</li>
                    <li>Logo Designer</li>
                  </ul>
                </p><br />
                <div className='d-flex' style={{ gap: '20px' }}>
                  <a href='https://www.linkedin.com/in/hardik-d-761711209/' type="button" class="btn btn-warning"><FaLinkedin style={{ fontSize: '30px' }} /></a>
                  <a href='https://www.instagram.com/hardik_dangodara369?igsh=MWRjeTdoeGo4dW44dQ==' type="button" class="btn btn-warning"><FaInstagram style={{ fontSize: '30px' }} /></a>
                  <a href='https://www.youtube.com/@hendyboy' type="button" class="btn btn-warning"><FaYoutube style={{ fontSize: '30px' }} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*--------------------------------------------- Profile Section (end) ----------------------------------------------------- */}
        <br /><br />

        <br /><br />
        <h3 className='allsectionheadtext'> Contact now 📞 </h3><br />
        <div class="container3 card-title1">
          <form onSubmit={handleSubmit} >
            <br />
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Enter your full name...."
              name="name" value={formData.name} onChange={handleChange}
              style={{ boxShadow: 'black 0px 20px 40px 0px' }} required />
            </div>
            <br />
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Enter email...." 
              name="email" value={formData.email} onChange={handleChange}
              title='Enter proper email id' style={{ boxShadow: 'black 0px 20px 40px 0px' }} required />
            </div>
            <br />
            <div class="form-group">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Comment here....'
              name="comment" value={formData.comment} onChange={handleChange}
              style={{ boxShadow: 'black 0px 20px 40px 0px' }} required></textarea>
              <br />
            </div>
            <button type="submit" class="btn btn-warning" style={{float:'right'}}>Submit</button>
            <br /><br />
          </form>
        </div>
        <br /><br />
        <br /><br />

        <div>
          <h3 className='allsectionheadtext'> Location here 📍 </h3><br />
          <card>
            <Card.Body>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14883.261315753!2d72.82235478715822!3d21.1597463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e2fe47b1ee1%3A0x504c1d61b4e6e422!2sUCCC%20%26%20SPBCBA%20%26%20SDHGCBCA%20%26%20IT%20College!5e0!3m2!1sen!2sin!4v1704910877937!5m2!1sen!2sin"
                width="100% " height="450" className='' style={{ border: '0',  boxShadow: 'white 1px 2px 40px 0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Card.Body>
          </card>
        </div>
        <br /><br />

        <div>
          <Footer />
        </div>


      </div>

    </>
  )
}
