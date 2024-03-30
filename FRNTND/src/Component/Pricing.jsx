import React from 'react'
import '../App.css';
import { FaRupeeSign } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi2";
import photo14 from '../Img/photo14.png'
import photo15 from '../Img/photo15.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Footer } from './Footer';
import Navbaar from '../Navbaar';


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export const Pricing = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showy, setShowy] = useState(false);

    const handleClosey = () => setShowy(false);
    const handleShowy= () => setShowy(true);

    //# Monthly Detail (start) .....................................................................
    const [datam, setDatam] = useState({
            pname:"",
            pemail:"",
            pnumber:"",
            panumber:"",
            pcity:"",
            pstate:"",
            pcountry:""
    });

    const navigatetologin = useNavigate();

    const monthFormsub = async (e) => {
        e.preventDefault();
        const { pname, pemail, pnumber, panumber, pcity, pstate, pcountry } = datam
        try {
            const datamonth  = await axios.post('/month-details', {
                pname, pemail, pnumber, panumber, pcity, pstate, pcountry 
            })
            if (datamonth.error) {
                toast.error(datamonth.error)
            } else {
                setDatam({})
                toast.success('Monthly plan detail send successfull....!')
                navigatetologin('/Pricedetailmonth')
            }
        } catch (error) {
            console.log(error);
        }
    }
    //# Monthly Detail (end) .......................................................................

    const [ydata, setYdata] = useState({
        yname:"",
        yemail:"",
        ynumber:"",
        yanumber:"",
        ycity:"",
        ystate:"",
        ycountry:""
    });
    const navigatetologin1 = useNavigate();

    const  yearFormSub = async (e)=>{
        e.preventDefault();
        const { yname, yemail, ynumber, yanumber, ycity, ystate, ycountry } = ydata
        try {
            const datayear  = await axios.post('/year-details', {
                yname, yemail, ynumber, yanumber, ycity, ystate, ycountry  
            })
            if (datayear.error) {
                toast.error(datayear.error)
            } else {
                setYdata({})
                toast.success('Yearly plan detail send successfull....!')
                navigatetologin1('/Pricedetailyear')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbaar />
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
                                    <FaRupeeSign style={{ margin: '0px 3px 20px', fontSize: '25px' }} /><span style={{ fontSize: '200%' }}>6000{"\t"}-</span>
                                    {"\t"}Per Month</p><p>All Accessories are free for any purchase package.<br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href='#d' className='btn btn-warning' style={{ width: '50%' }} onClick={handleShow}>Purchase now <HiChevronDoubleRight /></a>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ backgroundColor: '#08123d', borderRadius: '20px' }} className='price'>
                        <center> <img variant="top" src={photo15} width='40%' alt='...' /></center>
                        <Card.Body>
                            <Card.Text className='text-center text-light'>
                                <h4 style={{ color: '#0073CF' }}>Annually</h4><hr />
                                <p className="card-text">
                                    <FaRupeeSign style={{ margin: '0px 3px 20px', fontSize: '20px' }} /><span style={{ fontSize: '200%' }}>12,000{"\t"}-</span>
                                    {"\t"} Per Year</p><p>All Accessories are free for any purchase package.<br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href='#d' className='btn btn-warning' style={{ width: '50%' }} onClick={handleShowy}>Purchase now <HiChevronDoubleRight /></a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br /><br /><br />
            </div>

            {/*_____________________ Monthly Pay detail _____________________________- */}
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton className='border-0 month_form' >
                        <Modal.Title className='text-light'>MONTHLY PLAN</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='month_form'>
                        <form className='justify-content-center' onSubmit={monthFormsub}>
                            <input type='text' placeholder='Enter Full Name....' className='payfeild1' name='pname' 
                            value={datam.pname} onChange={(e) => setDatam({ ...datam, pname: e.target.value })} required />
                            <br /><br />
                            <input type='email' placeholder='Enter your valid Email-ID....' className='payfeild1' name='pemail'
                            value={datam.pemail} onChange={(e) => setDatam({ ...datam, pemail: e.target.value })} required />
                            <br /><br />
                            <input type='tel' placeholder='Enter bank linked Phone Number....' pattern='[0-9]{10}' name='pnumber'
                            value={datam.pnumber} onChange={(e) => setDatam({ ...datam, pnumber: e.target.value })} className='payfeild1' required />
                            <br /><br />
                            <input type='number' placeholder='Enter your Aadhar Number....' pattern='[0-9]{12}' name='panumber'
                            value={datam.panumber} onChange={(e) => setDatam({ ...datam, panumber: e.target.value })} className='payfeild1' required />
                            <br /><br />
                            <input type='text' placeholder='Enter your City....' className='payfeild1' name='pcity'
                            value={datam.pcity} onChange={(e) => setDatam({ ...datam, pcity: e.target.value })} required />
                            <br /><br />
                            <input type='text' placeholder='Enter your State....' className='payfeild1' name='pstate'
                            value={datam.pstate} onChange={(e) => setDatam({ ...datam, pstate: e.target.value })} required />
                            <br /><br />
                            <input type='text' placeholder='Enter your Country....' className='payfeild1' name='pcountry'
                            value={datam.pcountry} onChange={(e) => setDatam({ ...datam, pcountry: e.target.value })} required />
                            <br /><br />
                            <Button variant="danger" onClick={handleClose}>
                                CANCEL
                            </Button>{"\t"}
                            <button className="btn btn-warning" type='reset' onClick={()=>setDatam({})}>
                                RESET
                            </button>{"\t"}
                            <button type='submit' className="btn btn-success">
                                SUBMIT
                            </button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
            {/*_____________________ Monthly Pay detail _____________________________- */}


            {/*_____________________ Monthly Pay detail _____________________________- */}
            <div>
                <Modal show={showy} onHide={handleClosey} className='bg-transparent'>
                    <Modal.Header closeButton className='border-0 month_form' >
                        <Modal.Title className='text-light'>YEARLY PLAN</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='month_form'>
                        <Form className='justify-content-center' onSubmit={yearFormSub}>
                            <input type='text' placeholder='Enter Full Name....' className='payfeild1' name='yname'
                            value={ydata.yname} onChange={(e) => setYdata({ ...ydata, yname: e.target.value })} required />
                            <br /><br />
                            <input type='email' placeholder='Enter your valid Email-ID....' className='payfeild1' name='yemail'
                            value={ydata.yemail} onChange={(e) => setYdata({ ...ydata, yemail: e.target.value })} required />
                            <br /><br />
                            <input type='tel' placeholder='Enter bank linked Phone Number....' pattern='[0-9]{10}' className='payfeild1' name='ynumber'
                            value={ydata.ynumber} onChange={(e) => setYdata({ ...ydata, ynumber: e.target.value })} required />
                            <br /><br />
                            <input type='number' placeholder='Enter your Aadhar Number....' pattern='[0-9]{12}' name='yanumber' className='payfeild1'
                            value={ydata.yanumber} onChange={(e) => setYdata({ ...ydata, yanumber: e.target.value })} required />
                            <br /><br />
                            <input type='text' placeholder='Enter your City....' className='payfeild1' name='ycity'
                            value={ydata.ycity} onChange={(e) => setYdata({ ...ydata, ycity: e.target.value })} required />
                            <br /><br />
                            <input type='text' placeholder='Enter your State....' className='payfeild1' name='ystate'
                            value={ydata.ystate} onChange={(e) => setYdata({ ...ydata, ystate: e.target.value })} required />
                            <br /><br />
                            <input type='text' placeholder='Enter your Country....' className='payfeild1' name='ycountry'
                            value={ydata.ycountry} onChange={(e) => setYdata({ ...ydata, ycountry: e.target.value })} required />
                            <br /><br />
                            <Button variant="danger" onClick={handleClosey}>
                                CANCEL
                            </Button>{"\t"}
                            <button className="btn btn-warning" type='reset' onClick={()=>setYdata({})}>
                                RESET
                            </button>{"\t"}
                            <Button type='submit' variant="btn btn-success">
                                SUBMIT
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
            {/*_____________________ Monthly Pay detail _____________________________- */}
            

            <div>
                <Footer />
            </div>

        </>
    )
}

