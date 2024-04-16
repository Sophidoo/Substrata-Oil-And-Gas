

import { FaArrowRight } from "react-icons/fa6";
import circle from "../../assets/images/circleGroup.svg"
import engineering from "../../assets/images/engineering.jpg"
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import well from "../../assets/images/Well.png"

const OServiceCard5 = () => {
    
    const [ref, inView] = useInView();

    return<>
        <div id="Cased-Hole Formation Evaluation" className="serviceCard  serviceCard2 ashService">
        <div className="serviceImage">
                <div className="rect"></div>
                <img src={require("../../assets/images/casedhole.png")} alt="" />
            </div>
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
                    <h3>Cased-Hole Formation Evaluation</h3>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, x: [-100, 0]} : {opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <ul>
                        <li>Candidate well review and selection</li>
                        <li>Preparation of data acquisition plan based on agreed objective with operator </li>
                        <li>Real-time log QC and acquisition support </li>
                        <li>Data processing and Interpretation</li>
                        <li>Preparation of final report and recommendations.</li>
                        <li>Post-job support </li>
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
            
        </div>

    </>
}

export default OServiceCard5