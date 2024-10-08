

import { FaArrowRight } from "react-icons/fa6";
import circle from "../../assets/images/circleGroup.svg"
import engineering from "../../assets/images/engineering.jpg"
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import seismic from "../../assets/images/seismic image.png"
import {useNavigate} from "react-router"

const ServiceCard2 = () => {
    
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
                    <h3>Seismic Data Processing</h3>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <p>Substrata Oil and Gas Limited provides 2D, 3D and 4D seismic data processing and analysis including time processing, depth imaging, for oil & gas companies with combined seismic experience and the latest state-of-the-art computer systems and software to give our clients the best stratigraphic and structural geophysical services available. With our technical partner Geomage, we provide innovative processing solutions to the Oil and Gas industry. Geomage team comes with vast experience, processing the most difficult seismic. .</p>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <button  onClick={() => navigate("/services/seismic-services")}>Learn More <FaArrowRight/></button>
                </motion.div>
            </div>
            <div className="serviceImage">
                <div className="rect"></div>
                <img src={seismic} alt="" />
            </div>
        </div>

    </>
}

export default ServiceCard2