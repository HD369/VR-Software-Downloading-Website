import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import photo16 from '../Img/photo16.jpg'
import { FaRupeeSign } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi2";

export const Pricedetailyear = () => {

  const [producty, setProducty] = useState({
    name: "HD Virtuality",
    price: 12000,
    productOwner: "(AuraX)",
    description: "This VR software is only for Yearly plan with accessories, Connect to any electronic device and run it easily...",
    quantity: 1,
  });

  const makePayment1 = async () => {
    const stripe = await loadStripe(" pk_test_51NneEISFgid8u6iuHtFjODp0PtG9WY6XeZus0y6hprWgE5rBmyMO7wPRUKIPRNQicHpWsD9VPMZtmXjXs96FyvIh00TzzgVGqH");
    const body = { producty };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch("http://localhost:2424/year/create-checkout-session",
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
      <div><br /><br />

        <h1 className='text-center'> Make Payment 📦</h1>
        <CardGroup style={{ margin: '30px' }}>
          <Card className="border-0">
            <img src={photo16} width='70%' alt='...' style={{marginLeft:'20%'}} />
          </Card>
          <Card style={{ backgroundColor: '#08123d', borderRadius: '40px' }} className='m-5 p-3'>
            <Card.Body className="d-flex">
              <Card.Text className='text-start text-light'>
                <h4 style={{ color: '#0073CF' }}>PLAN PURCHASE YEARLY</h4><hr />
                <br />
                <h2>{producty.name}</h2>
                <h6>{producty.description}</h6>
                <p>{producty.productOwner}</p>
                <br />
                <p>All Accessories are free for any purchase package.<br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <FaRupeeSign style={{ margin: '0px 3px 20px', fontSize: '30px' }} />
                <span style={{ fontSize: '200%' }}>12,000{"\t"}-</span>
                <br />
                <button onClick={makePayment1} className="btn btn-warning">
                  Make Payment<HiChevronDoubleRight />
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  )
}

