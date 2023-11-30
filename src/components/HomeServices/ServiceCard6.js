import { FaArrowRight } from "react-icons/fa6";
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import circle from "../../assets/images/circleGroup.svg"
import trainees from "../../assets/images/trainees2.png"

const ServiceCard6 = () => {
    const [ref, inView] = useInView();

      
    
    return<>
            <div className="serviceCard serviceCard2 ashService" >
                <div className="serviceImage">
                    <div className="rect"></div>
                    <img src={trainees} alt="" />
                </div>
                <div className="serviceContent">
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <img src={circle} alt="" />
                </motion.div>
                    
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <h3>Training Services</h3>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <p>Welcome to Substrata's Training Services, your gateway to comprehensive and specialized courses in the field of petroleum engineering, petroleum geology, process engineering, business development, and health, safety, and environment. Our training programs are meticulously crafted to cater to industry-specific disciplines and technical challenges, ensuring that professionals are equipped with the latest knowledge and skills to excel in their careers.</p>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >

                    <button>Learn More <FaArrowRight/></button>
                </motion.div>
                </div>
            </div>


    </>

}

export default ServiceCard6