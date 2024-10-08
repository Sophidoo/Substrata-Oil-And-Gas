

import { FaArrowRight } from "react-icons/fa6";
import circle from "../../assets/images/circleGroup.svg"
import engineering from "../../assets/images/engineering.jpg"
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import well from "../../assets/images/Well.png"
import {useNavigate} from "react-router"

const ServiceCard5 = () => {
    
    const [ref, inView] = useInView();
    const navigate = useNavigate()

    return<>
        <div className="serviceCard">
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
                    <h3>Well Services</h3>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <p>We offer a vast range of measurement and testing solutions, through the lifecycle of wells. We have what it takes to undertake surface testing and information gathering services; we guarantee reliable answers about your well's productivity, fluid properties, composition, etc.
                    Our goal is to provide high-quality, safe and affordable services that give you the information and data you need to maximise the productivity of your wells.</p>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <button onClick={() => navigate("/services/well-services")}>Learn More <FaArrowRight/></button>
                </motion.div>
            </div>
            <div className="serviceImage">
                <div className="rect"></div>
                <img src={well} alt="" />
            </div>
        </div>

    </>
}

export default ServiceCard5