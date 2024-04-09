import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import "../../styles/services/SubSurface.css"
import ashDesign from "../../assets/images/headingDesign.png"
import whiteDesign from "../../assets/images/headingdesignwhite.png"
import fielddev from "../../assets/images/fielddev.png"
import fieldopt from "../../assets/images/fieldoptimization.png"
import seismic from "../../assets/images/seismicAcquisition.png"
import graph from "../../assets/images/surfacegraph.png"
import {motion} from 'framer-motion'
import { useEffect } from "react"


const SubSurface = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return<>
        <Navbar/>
        <section className="subSurfaceHero">
            <div className="suboverlay">
            <motion.div
            animate={{ y: [50, 0], opacity: 1}  }
            initial={{opacity: 0}}
            transition={{duration: 2, ease: "easeInOut"}}
            >
                <h2>Sub-Surface Service</h2>
                <p>Our team of seismic experts have a combined experience of over 100 years of seismic design, acquisition and supervision. <br/>
                Combined, our team has seismic experience spanning all the continents of the world. Our expertise includes;
                <ul>
                    <li>Land and Swamp seismic</li>
                    <li>Transition Zone seismic</li>
                    <li>Towed streamer Seismic</li>
                    <li>4D Seismic</li>
                </ul>
                </p>
            </motion.div>
            </div>
        </section>

        <section className="seismic">
            <div className="leftSeismic">
            <img src={ashDesign} alt="" />
                <h2>Seismic Acquisition & Supervision</h2>
                <p>
                    <span>Our team of seismic experts have a combined experience of over 100 years of seismic design, acquisition and supervision.</span>
                    <span>Combined, our team has seismic experience spanning all the continents of the world. Our expertise includes;</span>

                    <ul>
                        <li>Land and Swamp seismic</li>
                        <li>Transition Zone seismic</li>
                        <li>Towed streamer Seismic</li>
                        <li>4D Seismic</li>
                        <li>4C - Four Component Ocean bottom Seismic</li>
                        <li>Ocean Bottom Cable (OBC) seismic</li>
                    </ul>
                </p>
            </div>
            <img src={seismic} alt="" />
        </section>

        <section className="seismic seismicAsh">
            <img src={fielddev} alt="" />
            <div className="leftSeismic ">
                <img src={whiteDesign} alt="" />
                <h2>Field Development & Prospectivity
Studies</h2>
                <p>
                    <span>Oil and gas exploration and exploitation require a large amount of economic resources in onshore and offshore environments, albeit offshore environment requires more resources than onshore. Field Development and Prospectivity Studies have the main objective of maximizing the revenue from a given investment.</span>
                    <span>Scenarios with the greatest median (P50), Net Present Value(NPV) and lowest spread between P10 and P90 NPV are usually selected. Economical evaluation is complicated because there are so many variables to be considered in the study and decision making process.</span>
                    <span>We understand that in the exploitation of a hydrocarbon field, the process of identifying the concepts technically feasible and associated to the best economical performance is a critical success factor.</span>
                    <span>In today’s Exploration and Production identifying viable assets has become very challenging hence the need for very experienced teams and advanced technologies available in the industry to make informed economically viable decisions. Our team in conjunction with our technical partners, provides this service efficiently and cost effectively to our esteemed clients.</span>
                </p>
            </div>
        </section>

        <section className="seismic">
            <div className="leftSeismic">
            <img src={ashDesign} alt="" />
                <h2>Economic Evaluation of Assets & 
Petroleum Economics</h2>
                <p>
                    <span>We assist operators make well informed decisions by using deterministic models and other petroleum economic models to analyze the profitability of petroleum projects.</span>
                    <span>Stochastic modeling tools are used in evaluating the risk features of projects.</span>
                    <span>Economic principles underlying petroleum fiscal system and design are incorporated into an in-depth study of the economics of new projects, resulting in better decision making, effective capital budgeting and incremental economics.</span>
                    <span>Monte Carlo simulation of E & P project economics and profitability is often used in these studies.</span>
                </p>
            </div>
            <img src={graph} alt="" />
        </section>
        <section className="seismic seismicAsh">
            <img src={fieldopt} alt="" />
            <div className="leftSeismic ">
            <img src={whiteDesign} alt="" />
                <h2>Field Optimization Services</h2>
                <p>
                    <span>Whether bringing your first well online or managing a mature field, an operator face certain challenges. Getting to first production is expensive and time-consuming, and when you do start producing, high operating, maintenance and compliance costs are commonly experienced. And in some cases the wells are not producing at their optimum levels, but you can’t easily pinpoint why.</span>
                    <span>Optimization of the production from an oil or gas field requires taking a systematic, comprehensive look at your production systems from the outside in.</span>
                    <span>Our Team can provide a complete, objective and independent analysis of your production environment along with recommendations for maximizing production, reliability and cost efficiency – field wide. Our multi-discipline team of experts will help you improve production rates, equipment life and lift efficiency while reducing maintenance costs.</span>
                </p>
            </div>
        </section>
        <Footer/>
    </>
}

export default SubSurface