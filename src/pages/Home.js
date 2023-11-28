import { useNavigate } from "react-router"
import Navbar from "../components/Navbar"
import "../styles/Home.css"
import { FaArrowRight } from "react-icons/fa6";
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "../components/HomePage/Services";
import Footer from "../components/Footer";

const Home = () => {
    const navigate = useNavigate()
    const [ref, inView] = useInView();

      
    
    return<>
        <Navbar/>
        <section className="hero">
            <div className="overlay">
        <motion.div
           animate={{ y: [100, 0], opacity: 1 }}
           initial={{opacity: 0}}
           transition={{duration: 2}}
           
        >
                <h1>Substrata Oil and Gas Limited</h1>
        </motion.div>
        <motion.div
           animate={{ y: [100, 0], opacity: 1 }}
           initial={{opacity: 0}}
           transition={{duration: 2}}
        >
                <p>Adding value to Nigeria Oil and Gas industry through application of best technology, cost effective, and efficient solutions</p>
        </motion.div>
        <motion.div
           animate={{ y: [100, 0], opacity: 1 }}
           initial={{opacity: 0}}
           transition={{duration: 2}}
        >
                <button onClick={() => navigate("/about")}>Read More</button>
        </motion.div>
            </div>
        </section>

        <motion.div
            ref={ref}
            animate={inView ? {opacity: 1} : {opacity: 0}}
            initial={{opacity: 0}}
            transition={{duration: 1, ease: "easeIn"}}
        >
            <section className="history">
                <h2>Substrata's History</h2>
                <h3>Substrata Oil and Gas Limited was incorporated in 2006 to carry out oil field services to the Oil and Gas industry in Nigeria.</h3>
                <p>Substrata Oil and Gas Limited (RC 663293) was incorporated in 2006 to carry out oil field services to the Oil and Gas industry in Nigeria. <br/> The need to reduce costs by introducing new, effective and efficient technology, coupled with the recent introduction of new Government policies aimed at encouraging and ensuring more participation by competent Nigerians in the upstream Oil & Gas Industry has played an important role in the development of Substrata Oil and Gas Limited. <br/> Substrata Oil and Gas Limited is wholly Nigerian owned with local and international affiliations and partnerships. Our operations are knowledge driven backed by technology.</p>
                <button>Learn More <FaArrowRight /></button>
            </section>
        </motion.div>

        <Services/>
        <Footer/>

    </>

}

export default Home