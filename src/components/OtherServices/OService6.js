import { FaArrowRight } from "react-icons/fa6";
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import circle from "../../assets/images/circleGroup.svg"
import trainees from "../../assets/images/trainees2.png"

const OServiceCard6 = () => {
    const [ref, inView] = useInView();

      
    
    return<>
            <div className="serviceCard  " >
                
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
                    <h3>Intervention Services/Production Enhancement</h3>
                </motion.div>
                <motion.div 
                    ref={ref}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{duration: 0.5, ease: "easeIn", type: "spring"}}
                >
                    <ul>
                        <li>Production Enhancement solutions are focused on remediating and rejuvenating existing asset both at reservoir, well and field levels with the aim of optimizing asset performance.</li>
                        <li>This may involve reservoir/well/field level analysis to understand current performance, challenges and optimization areas</li>
                        <li>GICSL has the competence to assess and review existing well and reservoir performance and provide advice/recommendations on fit-for-purpose solutions to bring the asset to its production potential. </li>
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
                <div className="serviceImage">
                    <div className="rect"></div>
                    <img src={require("../../assets/images/interventionservices.png")} alt="" />
                </div>
            </div>


    </>

}

export default OServiceCard6