

import { FaArrowRight } from "react-icons/fa6";
import circle from "../../assets/images/circleGroup.svg"
import engineering from "../../assets/images/engineering.jpg"
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard3 = () => {
    const [ref, inView] = useInView();

    return<>
        <div className="serviceCard serviceCard2 ashService">
            <div className="serviceImage">
                <div className="rect"></div>
                <img src={engineering} alt="" />
            </div>
            <div className="serviceContent">
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: [100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <img src={circle} alt="" />
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: [100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <h3>Sub-surface Service</h3>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: [100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <p>Our team of seismic experts have a combined experience of over 100 years of seismic design, acquisition and supervision.
                    Combined, our team has seismic experience spanning all the continents of the world. Our expertise includes;
                    <ul>
                        <li>Land and Swamp Seismic</li>
                        <li>Transition Zone seismic</li>
                        <li>Towed Streamer Seismic</li>
                        <li>4D Seismic</li>
                    </ul></p>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: [100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <button>Learn More <FaArrowRight/></button>
                </motion.div>
            </div>
        </div>
        
    </>
}

export default ServiceCard3