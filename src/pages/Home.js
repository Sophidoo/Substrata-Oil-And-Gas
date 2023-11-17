import { useNavigate } from "react-router"
import Navbar from "../components/Navbar"
import "../styles/Home.css"
import { FaArrowRight } from "react-icons/fa6";
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import circle from "../assets/images/circleGroup.svg"
import engineering from "../assets/images/engineering.jpg"
import factory from "../assets/images/factory.jpg"

const Home = () => {
    const navigate = useNavigate()
    const [ref, inView] = useInView({
        threshold: 0.1,
        rootMargin: '0px'
    });

      
    
    return<>
        <Navbar/>
        <section className="hero">
            <div className="overlay">
        <motion.div
           animate={{ y: [100, 0], opacity: 1 }}
           initial={{opacity: 0}}
           transition={{duration: 2}}
           
        >
                <h1>Substrata Oil and Gas Limited</h1>
        </motion.div>
        <motion.div
           animate={{ y: [100, 0], opacity: 1 }}
           initial={{opacity: 0}}
           transition={{duration: 2}}
        >
                <p>Adding value to Nigeria Oil and Gas industry through application of best technology, cost effective, and efficient solutions</p>
        </motion.div>
        <motion.div
           animate={{ y: [100, 0], opacity: 1 }}
           initial={{opacity: 0}}
           transition={{duration: 2}}
        >
                <button onClick={() => navigate("/about")}>Read More</button>
        </motion.div>
            </div>
        </section>

        <motion.div
            ref={ref}
            animate={inView ? {opacity: 1} : {opacity: 0}}
            initial={{opacity: 0}}
            transition={{duration: 2, ease: "easeIn"}}
        >
            <section className="history">
                <h2>Substrata's History</h2>
                <h3>Substrata Oil and Gas Limited was incorporated in 2006 to carry out oil field services to the Oil and Gas industry in Nigeria.</h3>
                <p>Substrata Oil and Gas Limited (RC 663293) was incorporated in 2006 to carry out oil field services to the Oil and Gas industry in Nigeria. <br/> The need to reduce costs by introducing new, effective and efficient technology, coupled with the recent introduction of new Government policies aimed at encouraging and ensuring more participation by competent Nigerians in the upstream Oil & Gas Industry has played an important role in the development of Substrata Oil and Gas Limited. <br/> Substrata Oil and Gas Limited is wholly Nigerian owned with local and international affiliations and partnerships. Our operations are knowledge driven backed by technology.</p>
                <button>Learn More <FaArrowRight /></button>
            </section>
        </motion.div>

        <section className="homeServices">
            <h1>Substrata's Oil and Gas Services in Nigeria</h1>

            <div className="serviceCard serviceCard2" >
                <div className="serviceImage">
                    <div className="rect"></div>
                    <img src={engineering} alt="" />
                </div>
                <div className="serviceContent">
                    <img src={circle} alt="" />
                    <h3>Engineering Design</h3>
                    <p>We undertake a wide range of Engineering, Procurement and Project management tasks for oil exploration and production facilities, gas production and processing facilities, separation, liquefaction and oil refining. Our professional approach places us first on the list when considering new tasks or technologies.
                    Projects we have executed include engineering analysis, procurement assistance and project management services. Our approach is always flexible, ensuring our esteemed clients satisfaction.</p>
                    <button>Learn More <FaArrowRight/></button>
                </div>
            </div>
        </section>

        <div className="banner">
            <img src={factory} alt="" />
        </div>

        <section className="homeServices">

            <div className="serviceCard">
                <div className="serviceContent">
                    <img src={circle} alt="" />
                    <h3>Seismic Data Processing</h3>
                    <p>Substrata Oil and Gas Limited provides 2D, 3D and 4D seismic data processing and analysis including time processing, depth imaging, for oil & gas companies with combined seismic experience and the latest state-of-the-art computer systems and software to give our clients the best stratigraphic and structural geophysical services available. With our technical partner Geomage, we provide innovative processing solutions to the Oil and Gas industry. Geomage team comes with vast experience, processing the most difficult seismic. .</p>
                    <button>Learn More <FaArrowRight/></button>
                </div>
                <div className="serviceImage">
                    <div className="rect"></div>
                    <img src={engineering} alt="" />
                </div>
            </div>
            <div className="serviceCard serviceCard2">
                <div className="serviceImage">
                    <div className="rect"></div>
                    <img src={engineering} alt="" />
                </div>
                <div className="serviceContent">
                    <img src={circle} alt="" />
                    <h3>Sub-surface Service</h3>
                    <p>Our team of seismic experts have a combined experience of over 100 years of seismic design, acquisition and supervision.
                    Combined, our team has seismic experience spanning all the continents of the world. Our expertise includes;
                    <ul>
                        <li>Land and Swamp Seismic</li>
                        <li>Transition Zone seismic</li>
                        <li>Towed Streamer Seismic</li>
                        <li>4D Seismic</li>
                    </ul></p>
                    <button>Learn More <FaArrowRight/></button>
                </div>
            </div>
            <div className="serviceCard">
                <div className="serviceContent">
                    <img src={circle} alt="" />
                    <h3>Produced Water Management Services</h3>
                    <p>We offer an array of specialized oil field services, including Oil Well Cementing, Fishing Services, Downhole Camera Services, Slickline and Wireline Services, and Drilling Support Services, encompassing OCTGs, DD, and FEWD. Our expertise ensures efficient and reliable solutions for the oil and gas industry's diverse operational needs.</p>
                    <button>Learn More <FaArrowRight/></button>
                </div>
                <div className="serviceImage">
                    <div className="rect"></div>
                    <img src={engineering} alt="" />
                </div>
            </div>
        </section>

        <section className="blogsWrapper">

        </section>

    </>

}

export default Home