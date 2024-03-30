import { useContext } from "react";
import { Usercontext } from "./Component/Context/Usercontext";

import React from "react";
import { Link, redirect } from "react-router-dom";
import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './Img/logo.png'



function Navbaar() {

  const {user} = useContext(Usercontext)

const handleLogout = () => {
  alert("Are you sure to leave...");
  redirect('/')
};

  return (
    <div>
      <Navbar style={{ backgroundColor: '#040a23', boxshadow: '#03baed 2px 3px 4px 0px'}} expand="lg" >
      <Navbar.Brand href="/Homepage">
      <img
        src={logo}
        width="150"
        height="100"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-warning"/>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="topnav">
            <Nav.Link href="/Pricing" >Services</Nav.Link>
            <Nav.Link href="/Features">Features</Nav.Link>
            <NavDropdown className="topnav" title="Resources">
              <NavDropdown.Item href="/Lerning" style={{ color: 'black' }}>Learn now</NavDropdown.Item>
              <NavDropdown.Item href="/Helpcenter" style={{ color: 'black' }}>Help center</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Aboutus">About us</Nav.Link>
            <Nav.Link href="/Contactus">Contact us</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
    
        <Navbar.Collapse id="basic-navbar-nav"  className='mt-2 ' style={{ justifyContent:'center'}}>
          <Nav className="topnav">
            <NavDropdown className="topnav" title={!!user && (<p>Hi,{user.name}</p>) || 'User'}>
              <Link to='/' className="nav-link" style={{ color: 'black' }} onClick={handleLogout} >Logout</Link>
              {/*<Link to="/" className="nav-link" style={{ color: 'black' }} >Signup</Link>*/}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  )
}

export default Navbaar
