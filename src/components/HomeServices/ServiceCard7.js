

import { FaArrowRight } from "react-icons/fa6";
import circle from "../../assets/images/circleGroup.svg"
import engineering from "../../assets/images/engineering.jpg"
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard7 = () => {
    
    const [ref, inView] = useInView();

    return<>
        <div className="serviceCard lastCard">
            <div className="serviceContent">
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <img src={circle} alt="" />
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <h3>Drilling Services</h3>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <p>We have a team that support our esteemed clients in ensuring efficient, on-time and successful delivery of their drilling campaigns. Services supported are;
                    <ul>
                        <li>Supply of tubing and casings (OCTGs)</li>
                        <li>Fishing and fishing tool rental services</li>
                        <li>Solid Control Services</li>
                        <li>Cementing Pumping</li>
                        <li>Casing running & Liner hanger services</li>
                        <li>Waste management services...</li>
                    </ul></p>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <button>Learn More <FaArrowRight/></button>
                </motion.div>
            </div>
            <div className="serviceImage">
                <div className="rect"></div>
                <img src={engineering} alt="" />
            </div>
        </div>

    </>
}

export default ServiceCard7