import { FaArrowRight } from "react-icons/fa6";
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import circle from "../../assets/images/circleGroup.svg"
import engineering from "../../assets/images/engineering.jpg"

const OServiceCard1 = () => {
    const [ref, inView] = useInView();

      
    
    return<>
            <div className="serviceCard serviceCard2 ashService" style={{marginTop: "0px"}} >
                <div className="serviceImage">
                    <div className="rect"></div>
                    <img src={require("../../assets/images/openhole.png")} alt="" />
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
                    <h3>Open-Hole Petrophysical Evaluation</h3>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <ul>
                    <li>LWD/Wireline Log QC </li>
                    <li>Petrophysical Interpretation (basic and advanced) </li>
                    <li>Formation Testing analysis and Real-time support  </li>
                    </ul>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >

                </motion.div>
                </div>
            </div>


    </>

}

export default OServiceCard1