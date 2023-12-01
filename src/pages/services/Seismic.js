import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "../../styles/services/Seismic.css"
import seismic from "../../assets/images/seismic bckground.png"
import dataEnhancement from "../../assets/images/data enhancement image.png"
import analysis1 from "../../assets/images/seismic analysis1.png"
import analysis2 from "../../assets/images/seismic analysis2.png"
import facility from "../../assets/images/computing facility.png"
import {motion} from 'framer-motion'


const Seismic = () => {
    return<>
    <Navbar/>
    <div className="seismicWrapper">
        <div className="seismicOverlay">
        <motion.div
          animate={{ y: [50, 0], opacity: 1}  }
          initial={{opacity: 0}}
          transition={{duration: 2, ease: "easeInOut"}}
        >

            <h2>Seismic Data Processing</h2>
            <p>Substrata Oil and Gas Limited provides 2D, 3D and 4D seismic data processing and analysis including time processing, depth imaging, for oil & gas companies with combined seismic experience and the latest state-of-the-art computer systems and software to give our clients the best stratigraphic and structural geophysical services available. With our technical partner Geomage, we provide innovative processing solutions to the Oil and Gas industry. Geomage team comes with vast experience, processing the most difficult seismic. .</p>
        </motion.div>
        </div>
    </div>

    <div className="processingWrapper">
        <img src={seismic} alt="" />
        <div className="content">
            <h2>MULTIFOCUSING PROCESSING 2D / 3D</h2>
            <p>
            Substrata and Geomage provides most accurate seismic data processing services with its proprietary MultiFocusing Imaging technology. Geomage MultiFocusing© imaging used successfully all across the globe for wide spectrum of different geological/geophysical conditions/problems:
            <ul>
                <li>Data interpolation and regularization</li>
                <li>Structural seismic imaging</li>
                <li>Unconventional seismic</li>
                <li>Sparse/low-fold seismic</li>
                <li>Wide/Full-azimuth seismic</li>
            </ul>
            </p>
        </div>
    </div>
    <section className="enhancementWrapper">
        <div className="topWrapper">
            <div className="content">
                <h2>MULTIFOCUSING DATA 
                ENHANCEMENT</h2>
                <ul>
                    <li>In many situations, increasing SNR of pre-stack seismic traces is requested. Typi­cal examples are velocity model-building and pre-stack imaging. Wavefield parameters estimated by the Common Offset Multi-Focusing (COMF) method can be used for pre-stack data enhancement, interpolation and regularization.</li>
                    <li>In this case application locally stacks pre-stack traces related to near offset/azimuth values along estimated COMF kinematics parameters. The fold and position of traces in the produced gathers can be defined by original geometry or regularized according to virtual acquisition pattern.</li>
                    <li>The result of the summation is assigned to the same surface location, offset, and source-receiver coordinates. Repeating this procedure for all desired points generates a new trace gathers that is called the COMF enhanced gather.</li>
                </ul>
            </div>
            <img src={dataEnhancement} alt="" />
        </div>
        <div className="bottomWrapper">
            <h2>SEISMIC DATA TIME PROCESSING</h2>
            <ul>
                <li>Processing for the oil and Gas Industry: Substrata processors have been working with seismic data from both the oil and gas industry for over thirty years. Our team has a reputation for commitment to quality work, customer service, and the delivery of superior products for your geophysical needs.</li>
                <li>2D/3D Processing of diverse domestic and international projects in both stratigraphic and structural environments</li>
                <li>4D Time Lapse</li>
                <li>5D Pre-stack Interpolation and 2D/3D Pre-stack Time Migration</li>
                <li>AVO Compliant (Constant Amplitude, Constant Phase) Processing</li>
                <li>Pre-stack Merging of 3Ds with Various Acquisition Parameters</li>
            </ul>
        </div>
    </section>
    <section className="analysisWrapper">
        <h2>AVO ANALYSIS AND RESERVOIR CHARACTERIZATION</h2>
        <div className="contentWrapper">
            <div className="content">
                <ul>
                    <li>Seismic Data QC and Preconditioning</li>
                    <li>Creation of AVO and AVA forward models and comparison with gathers to ensure amplitude preservation</li>
                    <li>Application of noise and/or multiple attenuation, scaling, spectrum enhancement and data regularization
                    (if necessary) to facilitate AVO/AVA extraction and inversion</li>
                    <li>AVO Analysis</li>
                    <li>Well Log QC and Petrophysics/Rock Study</li>
                    <li>Post and Pre-Stack Inversion</li>
                    <li>Facies Classification</li>
                    <li>Fracture Detection</li>
                </ul>

                <h2>2D/3D DEPTH IMAGING</h2>
                <ul>
                    <li>Velocity Model Building</li>
                    <li>Velocity Model Update</li>
                    <li>Tomography</li>
                    <li>Multidisciplinary Approach and Data Integration</li>
                    <li>Migration</li>
                </ul>
            </div>
            <div className="contentImages">
                <img src={analysis1} alt="" />
                <img src={analysis2} alt="" />
            </div>
        </div>

    </section>

    <section className="softwareWrapper">
        <div className="topSoftwareSection">
            <h2>Software</h2>
            <p>
            Substrata Oil And Gas Limited uses the most current version of softwares for seismic data processing for fast data access and easy 3D visualization of pre-stack/post-stack seismic data and interpretation data for 2D/3D survey, in addition to well data. <br/>
            Geomage g-Platform© offers a selection of modules and workflows designed to deliver optimal imaging solutions. Geomage solutions support a complete utilization of parallel processing capabilities of GPU and multi-core CPU clusters. This allows a reduction in lengthy processing times and gives a competitive advantage to our clients by delivering faster turnaround for their business decisions. <br/>
            With intuitive analysis tools, state-of-the-art geophysical algorithms and an optimized parallel infrastructure, the SeisSpace® ProMAX® Seismic Processing Software family helps teams get the most out of seismic data, increase productivity, reduce project cycle times and understand even the most difficult geologic targets. <br/>
            Shearwater’s Reveal provides advanced processing and imaging algorithms from Real Time QC on vessels, through to model building and depth imaging, within a flexible, intuitive interface. Reveal’s interactivity leads to faster and more accurate decision making. With its advanced batch job management, parallel processing and cluster scalability geophysicists can achieve highly efficient turnarounds with this easy to use software.
            </p>
        </div>
        <div className="bottomSoftwareSection">
            <div className="content">
                <h2>Computing Facility:</h2>
                <ul>
                    <li>IBM HS22 Compute Nodes</li>
                    <li>Linux workstations</li>
                    <li>Dell Power-Edge R7series</li>
                    <li>Dell Power-Edge R8s eries</li>
                    <li>High Performance Computing (HPC) Cluster</li>
                    <li>Various Tape drives</li>
                </ul>
            </div>
        <img src={facility} alt="" />
        </div>
    </section>
    <Footer/>

    </>
}

export default Seismic