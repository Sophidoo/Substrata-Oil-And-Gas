

import { FaArrowRight } from "react-icons/fa6";
import circle from "../../assets/images/circleGroup.svg"
import engineering from "../../assets/images/engineering.jpg"
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard4 = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        rootMargin: '0px'
    });

    return<>
        <div className="serviceCard">
            <div className="serviceContent">
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 1, ease: "easeIn", type: "spring"}}
                >
                    <img src={circle} alt="" />
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 1, ease: "easeIn", type: "spring"}}
                >
                    <h3>Produced Water Management Services</h3>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 1, ease: "easeIn", type: "spring"}}
                >
                    <p>We offer an array of specialized oil field services, including Oil Well Cementing, Fishing Services, Downhole Camera Services, Slickline and Wireline Services, and Drilling Support Services, encompassing OCTGs, DD, and FEWD. Our expertise ensures efficient and reliable solutions for the oil and gas industry's diverse operational needs.</p>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 1, ease: "easeIn", type: "spring"}}
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

export default ServiceCard4