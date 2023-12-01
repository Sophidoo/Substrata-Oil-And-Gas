import Navbar from "../components/Navbar"
import "../styles/About.css"
import Footer from "../components/Footer";
import { FaHandshake } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiCargoCrane } from "react-icons/gi";
import mission from "../assets/images/mission.jpg"
import vission from "../assets/images/vission.jpg"
import office from "../assets/images/office.png"
import {motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";

const About = () => {
    const [ref, inView] = useInView();
    
    return<>
        <Navbar/>

        <div className="aboutHeroWrapper">
            <div className="leftAbout">
                <motion.div
                animate={{ y: [100, 0], opacity: 1 }}
                initial={{opacity: 0}}
                transition={{duration: 2}}
                
                >
                    <h1>Corporate Profile</h1>
                </motion.div>
                <div className="aboutDetails">
                <motion.div
                animate={{ y: [100, 0], opacity: 1 }}
                initial={{opacity: 0}}
                transition={{duration: 2}}
                
                >
                    <p>Substrata Oil and Gas Limited (RC 663293) was incorporated in 2006 to carry out oil field services to the Oil and Gas industry in Nigeria.</p>
                </motion.div>
                <motion.div
                animate={{ y: [100, 0], opacity: 1 }}
                initial={{opacity: 0}}
                transition={{duration: 2}}
                
                >
                    <p>The need to reduce costs by introducing new, effective and efficient technology, coupled with the recent introduction of new Government policies aimed at encouraging and ensuring more participation by competent Nigerians in the upstream Oil & Gas Industry has played an important role in the development of Substrata Oil and Gas Limited.</p>
                </motion.div>
                <motion.div
                animate={{ y: [100, 0], opacity: 1 }}
                initial={{opacity: 0}}
                transition={{duration: 2}}
                
                >
                    <p>Substrata Oil and Gas Limited is wholly Nigerian owned with local and international affiliations and partnerships. Our operations are knowledge driven backed by technology.</p>
                </motion.div>
                <motion.div
                animate={{ y: [100, 0], opacity: 1 }}
                initial={{opacity: 0}}
                transition={{duration: 2}}
                
                >
                     <p>Strengthened by a board of directors with vast experience in the oil and gas industry, and staff driven by the zeal to deliver qualitative, on-time and cost effective services to our esteemed clients, we are poised to ensure the delivery of qualitative and reliable services.</p>
                </motion.div>
                    
                    
                    
                   
                </div>
            </div>
            <div className="rightAbout">
                <img src={office} alt="" />
            </div>
        </div>

        <motion.div
            ref={ref}
            animate={inView ? {opacity: 1} : {opacity: 0}}
            initial={{opacity: 0}}
            transition={{duration: 2, ease: "easeInOut"}}
        >

        <div className="missionVisionWrapper">
            <div className="missionWrapper">
                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>
                    To provide the best value in services for the oil and gas industry in Nigeria and Africa. Best value means providing the fit-for-purpose solutions that best meet our client’s criteria and resources through the following:
                    <ul>
                        <li>Best-in-class technology</li>
                        <li>Maintenance of a keen competitive edge through efficiency, good service quality and excellent safety performance.</li>
                        <li>Training, motivation and empowerment of our personnel to maintain top-quality service delivery at all times.</li>
                    </ul>
                    </p>
                </div>
                <img src={mission} alt="" />
            </div>
            <div className="missionWrapper vissionWrapper">
                <div className="mission vision">
                    <h3>Our Vision</h3>
                    <p>To become the point of reference in the Africa Oil and Gas industry, known for world class service delivery with utmost professionalism.</p>
                </div>
                <img src={vission} alt="" />
            </div>
        </div>
        </motion.div>

        <section className="valuesWrapper">
            <h2>Our Corporate values</h2>
            <div className="valuesCardWrapper">
                <div className="valuesCard">
                <FaHandshake/>
                    <h3>Integrity</h3>
                    <p>At our core, integrity defines us. We are dedicated to upholding unwavering honesty and ethical principles, ensuring trust and delivering excellence in all aspects of our operations, cultivating enduring and meaningful partnerships.</p>
                </div>
                <div className="valuesCard">
                <IoIosPerson/>
                    <h3>Personnel</h3>
                    <p>Our skilled personnel are the backbone of our success. They are dedicated, knowledgeable, and committed to ensuring top-notch performance and delivering quality service to our clients.</p>
                </div>
                <div className="valuesCard">
                <RiCustomerService2Fill/>
                    <h3>Service</h3>
                    <p>Our commitment to service excellence is unwavering. We strive to provide unparalleled solutions, consistently exceeding expectations, and ensuring our clients receive the utmost satisfaction, building trust and enduring relationships.</p>
                </div>
                <div className="valuesCard">
                <GiCargoCrane/>
                    <h3>Technology</h3>
                    <p>Leveraging cutting-edge technology is at the heart of our operations. We continuously embrace innovation to enhance efficiency, accuracy, and competitiveness in delivering solutions that meet industry demands.</p>
                </div>
                <div className="valuesCard">
                <HiUserGroup/>
                    <h3>Social Responsibility</h3>
                    <p>Social responsibility is integral to our ethos. We are deeply committed to giving back to the communities we operate in, promoting sustainability, and fostering a positive impact on society and the environment.</p>
                </div>
            </div>
        </section>
    <Footer/>
    </>

}

export default About