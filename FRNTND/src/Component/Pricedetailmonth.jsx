import React, { useState} from "react";
import { loadStripe } from "@stripe/stripe-js";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import photo17 from '../Img/photo17.png';
import { FaRupeeSign } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi2";


export const Pricedetailmonth = () => {

    const [productm, setProductm] = useState({
        name: "HD Virtuality",
        price: 6000,
        productOwner: "(AuraX)",
        description: "This VR software is only for Monthly plan not giving accessories, Connect to any electronic device and run it easily...",
        quantity: 1,
    });

    const makePayment = async () => {

        const stripe = await loadStripe(" pk_test_51NneEISFgid8u6iuHtFjODp0PtG9WY6XeZus0y6hprWgE5rBmyMO7wPRUKIPRNQicHpWsD9VPMZtmXjXs96FyvIh00TzzgVGqH");
        const body = { productm };
        const headers = {
            "Content-Type": "application/json",
        };

        const response = await fetch("http://localhost:2424/month/create-checkout-session",
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            }
        );

        const session = await response.json();
        console.log(session)

        const result = stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.log(result.error);
        }
    };

    return (
        <>
        <br/>
        <h1 className='text-center'> Make Payment 📦</h1>
            <CardGroup className="border-0">
                <Card className="border-0">
                    <img style={{marginLeft:'-10%'}} src={photo17} width='140%' alt='...' />
                </Card>

                <Card style={{ backgroundColor: '#08123d', borderRadius: '40px' }} className='m-5 p-3' >
                    
                    <Card.Body >
                        <Card.Text className='text-start text-light'>
                        <h4 style={{ color: '#0073CF' }}>PLAN PURCHASE MONTHLY</h4><hr />
                        <br />
                        <h2>{productm.name}</h2>
                        <h6>{productm.description}</h6>
                        <p>{productm.productOwner}</p>
                        <br />
                        <p>All Accessories are free for any purchase package.<br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <FaRupeeSign style={{ margin: '0px 3px 20px', fontSize: '30px' }} />
                        <span style={{ fontSize: '200%' }}>6,000{"\t"}-</span>
                        <br />
                        <button onClick={makePayment} className="btn btn-warning">
                          Make Payment<HiChevronDoubleRight />
                        </button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    )
}
