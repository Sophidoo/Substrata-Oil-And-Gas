import { FaArrowRight } from "react-icons/fa6";
import circle from "../../assets/images/circleGroup.svg";
import engineering from "../../assets/images/engineering.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {useNavigate} from "react-router"
import surface from "../../assets/images/SubSurfacebg.png";

const ServiceCard8 = () => {
  const [ref, inView] = useInView();
  const navigate = useNavigate()

  return (
    <>
      <div className="serviceCard serviceCard2">
        <div className="serviceImage">
          <div className="rect"></div>
          <img src={surface} alt="" />
        </div>
        <div className="serviceContent">
          <motion.div
            ref={ref}
            animate={inView ? { opacity: 1, y: [100, 0] } : { opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", type: "spring" }}
          >
            <img src={circle} alt="" />
          </motion.div>
          <motion.div
            ref={ref}
            animate={inView ? { opacity: 1, y: [100, 0] } : { opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", type: "spring" }}
          >
            <h3>Other Services</h3>
          </motion.div>
          <motion.div
            ref={ref}
            animate={inView ? { opacity: 1, y: [100, 0] } : { opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", type: "spring" }}
          >
            <p>
              <ul>
                <li>Open-Hole Petrophysical Evaluation </li>
                <li>Cement bond log evaluation </li>
                <li>Corrosion Log Interpretation </li>
                <li>Production Log Interpretation </li>
                <li>Cased-Hole Formation Evaluation </li>
                <li>Services/Production Enhancement </li>
              </ul>
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            animate={inView ? { opacity: 1, y: [100, 0] } : { opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", type: "spring" }}
          >
            <button onClick={() => navigate("/other-services")}>
              Learn More <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard8;
