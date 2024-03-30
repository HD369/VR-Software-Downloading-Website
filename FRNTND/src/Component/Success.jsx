import React from 'react'
import Navbaar from '../Navbaar'

import pay1 from "../Img/pay1.png"
import Card from 'react-bootstrap/Card';
import { FaMicrosoft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../App.css'

export const Success = () => {

    const navigatefrom = useNavigate();

    const handleDownload = () => {
        // Replace 'path/to/your/zipfile.zip' with the actual path to your zip file
        const url = '../Demo.zip';
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.blob();
          })
          .then(blob => {
            // Create a temporary URL for the blob
            const blobUrl = window.URL.createObjectURL(blob);
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = blobUrl;
            link.setAttribute('download', 'Demo.zip');
            // Trigger a click event on the anchor element
            link.click();
            // Cleanup
            window.URL.revokeObjectURL(blobUrl);
            navigatefrom('/Homepage')
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      };

    return (
        <>
            <Navbaar />

            <div>
                <Card className='border-0 text-center'>
                    <center><img src={pay1} alt="..." width='25%' className='paysuccess' /></center>
                    <h1 style={{ fontSize: "50px", marginTop: '-40px', color: 'green' }}>Payment Success...</h1>
                    <p style={{ color: 'darkgreen' }}>Payment is successfully apply now you can Download our software and start using it.
                        No matter which plan do you can purchase</p>
                    <center><button className='btn btn-primary text-light' style={{ width: "20%" }} onClick={handleDownload}>Download VR Software{"\t"}<FaMicrosoft /></button></center>
                </Card>
            </div>
        </>
    )
}
