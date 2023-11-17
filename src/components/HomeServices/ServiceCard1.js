import { FaArrowRight } from "react-icons/fa6";
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import circle from "../../assets/images/circleGroup.svg"
import engineering from "../../assets/images/engineering.jpg"

const ServiceCard1 = () => {
    const [ref, inView] = useInView();

      
    
    return<>
            <div className="serviceCard serviceCard2" >
                <div className="serviceImage">
                    <div className="rect"></div>
                    <img src={engineering} alt="" />
                </div>
                <div className="serviceContent">
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{duration: 1, ease: "easeIn", type: "keyframes"}}
                >
                    <img src={circle} alt="" />
                </motion.div>
                    
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{duration: 1, ease: "easeIn", type: "keyframes"}}
                >
                    <h3>Engineering Design</h3>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{duration: 1, ease: "easeIn", type: "keyframes"}}
                >
                    <p>We undertake a wide range of Engineering, Procurement and Project management tasks for oil exploration and production facilities, gas production and processing facilities, separation, liquefaction and oil refining. Our professional approach places us first on the list when considering new tasks or technologies.
                    Projects we have executed include engineering analysis, procurement assistance and project management services. Our approach is always flexible, ensuring our esteemed clients satisfaction.</p>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{duration: 1, ease: "easeIn", type: "keyframes"}}
                >

                    <button>Learn More <FaArrowRight/></button>
                </motion.div>
                </div>
            </div>


    </>

}

export default ServiceCard1