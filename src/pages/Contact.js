import Navbar from "../components/Navbar"
import "../styles/Contact.css"
import React, { useRef } from 'react';
import { AiTwotoneMail} from "react-icons/ai"
import {BsFillTelephoneFill} from "react-icons/bs"
import {ImLocation} from "react-icons/im"
import Footer from "../components/Footer"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return<>
        <Navbar/>

        <div className="contactWrapper">
            <div className="leftContact">
                <div className="contactHeading">
                    <h1>Contact Us</h1>
                    <hr />
                    <p>Interested in our program or need advice?
                    Please get in touch and we’ll be glad to help.
                    </p>
                </div>
                <div className="contactInfo">
                <h2>Port Harcourt</h2>
                    <p><BsFillTelephoneFill/> <span>+234 8188591639, +234 9152151749</span></p>
                    <p><AiTwotoneMail/> <span>info@substrataoilandgas.com</span></p>
                    <p><ImLocation/> <span>Plot 59 Professor Okujagu street, off Trans Amadi road, Port Harcourt.</span></p>
                </div>
            
            </div>

            <div className="rightContact">
                <h2>Send us an email</h2>
                <form action="">
                    <input type="text" placeholder="Name*"/>
                    <div className="inputWrapper">
                        <input type="email" placeholder="Email Address*"/>
                        <input type="text" placeholder="Phone Number*"/>
                    </div>
                    <input type="text" placeholder="Subject*"/>
                    <textarea name="" id="" cols="30" rows="5" placeholder="Message*"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.693716819842!2d7.051538874560595!3d4.822557440590016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd069348f70f%3A0x5e4c32a26dedd987!2sYKC!5e0!3m2!1sen!2sng!4v1699681299578!5m2!1sen!2sng" width={"100%"} height={"300"} style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Unix Training Academy Location"></iframe>
        </div>
        <Footer/>
    </>

}

export default Contact