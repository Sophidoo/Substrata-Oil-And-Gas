import { FaArrowRight } from "react-icons/fa6";
import circle from "../../assets/images/circleGroup.svg";
import engineering from "../../assets/images/engineering.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import surface from "../../assets/images/SubSurfacebg.png";

const ServiceCard8 = () => {
  const [ref, inView] = useInView();

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
            <h3>Open-Hole Petrophysical Evaluation</h3>
          </motion.div>
          <motion.div
            ref={ref}
            animate={inView ? { opacity: 1, y: [100, 0] } : { opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", type: "spring" }}
          >
            <p>
              Gain insights from our Open-Hole Petrophysical Evaluation service.
              Leveraging advanced techniques, we deliver precise assessments to
              optimize oil exploration and production strategies. <br /> Our
              expertise includes:
              <ul>
                <li>LWD/Wireline Log QC </li>
                <li>Petrophysical Interpretation (basic and advanced) </li>
                <li>Formation Testing analysis and Real-time support </li>
              </ul>
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            animate={inView ? { opacity: 1, y: [100, 0] } : { opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", type: "spring" }}
          >
            <button>
              Learn More <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard8;
