import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from '../Img/logo.png'






export const Footer = () => {
    return (
        <>
            <div>
                <footer className="new_footer_area bg_color" style={{fontFamily: 'sans-serif'}}>
                    <div className="new_footer_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                        <h3 className=" f_600 t_color"><img
                                        src={logo}
                                        width='100%'
                                        alt="..."
                                      /></h3>
                                        <p style={{color:'white',textAlign:'center'}}><b>Do not miss any updates of our Website...Thank you.!</b></p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                        <h3 className="f-title f_600 t_color ">COMPANY</h3><hr style={{borderColor:'white'}}/>
                                        <ul className="list-unstyled f_list">
                                            <li><a href="/Homepage">Home</a></li>
                                            <li><a href="/Contactus">Contact Us</a></li>
                                            <li><a href="/Aboutus">About Us</a></li>
                                            <li><a href="/Privacypolicy">Privacy policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                                        <h3 className="f-title f_600 t_color ">INFORMATION</h3><hr style={{borderColor:'white'}}/>
                                        <ul className="list-unstyled f_list">
                                            <li><p style={{color:'white'}}>100, Abc-complex, Katargam , Surat Gujarat India</p></li>
                                        </ul>
                                        <ul className="list-unstyled f_list">
                                            <li><p style={{color:'white'}}>+91 9909966066</p></li>
                                        </ul>
                                        <ul className="list-unstyled f_list">
                                            <li><p style={{color:'white'}}>Email : HDWebsite@gmail.com</p></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                                        <h3 className="f-title f_600 t_color ">SOCIAL MEDIA</h3><hr style={{borderColor:'white'}}/>
                                        <div className="f_social_icon">
                                            <a href="https://www.facebook.com"><FaFacebook/></a>
                                            <a href="https://www.Instagram.com"><AiFillInstagram/></a>
                                            <a href="https://www.linkedin.com"><FaLinkedin/></a>
                                            <a href="https://www.youtube.com"><FaYoutube/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bg">
                            <div className="footer_bg_one"></div>
                            <div className="footer_bg_two"></div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
