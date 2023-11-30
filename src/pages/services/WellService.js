import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "../../styles/services/Well.css"
import analysis1 from "../../assets/images/water analysis.png"
import analysis2 from "../../assets/images/well analysis.png"
import tanks from "../../assets/images/water tanks.png"
import pipes from "../../assets/images/pipeConnection.png"
import machine from "../../assets/images/water checking machine.png"


const WellService = () => {
    return<>
    <Navbar/>
        <div className="wellWrapper">
            <div className="wellOverlay">
                <h2>Well Services</h2>
                <p>We offer a vast range of measurement and testing solutions, through the lifecycle of wells. We have what it takes to undertake surface testing and information gathering services; we guarantee reliable answers about your well's productivity, fluid properties, composition, etc. <br/>
                Our goal is to provide high-quality, safe and affordable services that give you the information and data you need to maximize the productivity of your wells.</p>
            </div>
        </div>
        <section className="wellServices">
            <img src={pipes} alt="" />
            <div className="content">
                <h2>OUR WELL SERVICES INCLUDE:</h2>
                <ul>
                    <li>Extended Well Testing & Reservoir Fluid Analysis</li>
                    <li>Well site Testing, Control, Monitoring & Clean-up</li>
                    <li>Multiphase Well Testing , Monitoring & Profiling</li>
                    <li>Real-Time Well Testing</li>
                </ul>
            </div>
        </section>
        <section className="acquisitionWrapper">
            <div className="acquisitionOverlay">
                <div className="topSection">
                    <div className="content">
                        <h2>Data Acquisition Services</h2>
                        <p>Our reservoir data acquisition services is second to none in the Oil and Gas industry. This is achieved by using advance data loggers from SPARTEK Applications
                        <ul>
                            <li>Well Testing</li>
                            <li>Well Performance Monitoring Permanent Sensors (Monitoring) Completion Diagnostics</li>
                            <li>Well Stimulation Reservoir Characterization Gradient Survey</li>
                            <li>Monitor Well Efficiency Production diagnostics</li>
                            <li>Analyze production profile by zone</li>
                            <li>Monitor well stimulations</li>
                            <li>Well mechanical integrity analysis Time lapse logging</li>
                            <li>Well treatment verification</li>
                        </ul>
                        </p>
                    </div>
                    <img src={machine} alt="" />
                </div>
                <img src={analysis1} alt="" />
            </div>
        </section>
        <section className="productivityWrapper">
            <img src={analysis2} alt="" />
            <div className="content">
                <h2>Well Productivity Analysis</h2>
                <p>
                The Echometer Well analyzer is used to optimize production from Oil and Gas wells. The principal objective of the Well Analyzer is to provide all the necessary data to analyze the performance of an Oil or Gas well.
                <ul>
                    <h3>Typical Questions Answered</h3>
                    <li>What is the depth to the liquid level?</li>
                    <li>Is there liquid above the ESP?</li>
                    <li>At what depth is the liquid column?</li>
                    <li>What is the casing–head pressure?</li>
                    <li>What is the percent liquid in the annular fluid column?</li>
                    <li>What is the pressure at the perforations?</li>
                    <li>What is the percent of the maximum oil rate that is currently being produced?</li>
                    <li>What is the maximum rate that could be produced from the well?</li>
                    <li>Are there any restrictions or anomalies in the annulus above the liquid level?</li>
                </ul>
                </p>
            </div>
        </section>
        <section className="sandWrapper">
            <div className="content">
                <h2>Sand Management Services</h2>
                <p>Sand detection and Sand rate determination using advance non-intrusive sand detector equipment. <br/>
                Sand sample collection for sieve analysis . Grain size determination. <br/>
                Design of wellhead desander and Hydrocyclones to remove identified solids from the multiphase flow. <br/>
                Remove sand and abrasive solids from the flow. For example, crude oil production, drilling fluids, and other multiphase flows. <br/>
                Controlled disposal of removed solids.</p>
            </div>
            <img src={tanks} alt="" />
        </section>
        <section className="integrityWrapper">
            <div className="integrityOverlay">
                <h2>WELL INTEGRITY MANAGEMENT SOLUTION</h2>
                <p>Well integrity has always been a concern in the E&P industry but until the Macondo incident it did not attract the same level of attention as asset integrity for process units. Since then, well integrity has topped the worry-list of management, and with good reason. Well integrity failure can have a major adverse impact on Asset revenue, cashflow and profitability, as well as liabilities from safety and environmental damage, Withdrawal of a company’s “license to operate” Shareholder value; partly due to reputational damage. <br/>
                Industry research indicates that a large number of wells are affected by integrity problems. The severity and frequency of well integrity problems strongly depends on the region, the fluids handled and the age of the wells. Globally it is estimated that 38% of oil and gas wells are affected by integrity issues. Well integrity deteriorates with age and as long as wells are operated in harsher environments. This may not necessarily affect the integrity of the Well but the operator has to monitor the well’s condition very closely and act quickly if a further fault is detected.
                Excessive pressure in the annulus can lead to Casing/Tubing collapse. This eventually results in poor production performance, damages to installation equipment and personnel as the case may be. <br/>
                The safety of your crew, equipment, and the environment depends on well integrity. Tubular are the backbone of well integrity. However total well integrity goes far beyond well construction. <br/>
                We assist our clients to safely and sustainably find, drill, complete and produce oil and gas fields efficiently and cost effectively. We depressurize and monitor the well casing/tubing pressure leakage test. The monitoring and pressure control process is one of the investigative measures to check and balance pressure build-up (PBU) from the tubing and casing.</p>
            </div>
        </section>
        <Footer/>
    </>
}

export default WellService