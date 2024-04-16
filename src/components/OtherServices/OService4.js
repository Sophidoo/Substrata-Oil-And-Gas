

import { FaArrowRight } from "react-icons/fa6";
import circle from "../../assets/images/circleGroup.svg"
import engineering from "../../assets/images/engineering.jpg"
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import water from "../../assets/images/waterManagementBackground.png"

const OServiceCard4 = () => {
    const [ref, inView] = useInView();

    return<>
        <div id="Production Log Interpretation" className="serviceCard ">
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
                    <h3>Production Log Interpretation</h3>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                   <ul>
                    <li>Production flow profile for vertical and deviated wells </li>
                    <li>Injection flow profile</li>
                    <li>Leak detection </li>
                    <li>Pre-job and post-job support </li>
                    <li>Preparation of data acquisition program based on customer objectives.</li>
                    <li>Final reporting</li>
                   </ul>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                </motion.div>
            </div>
            <div className="serviceImage">
                <div className="rect"></div>
                <img src={require("../../assets/images/productionlog.png")} alt="" />
            </div>
        </div>
    </>
}

export default OServiceCard4