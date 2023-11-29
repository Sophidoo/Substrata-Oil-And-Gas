import Navbar from "../../components/Navbar"
import "../../styles/services/Seismic.css"
import seismic from "../../assets/images/seismic bckground.png"
import dataEnhancement from "../../assets/images/data enhancement image.png"
const Seismic = () => {
    return<>
    <Navbar/>
    <div className="seismicWrapper">
        <div className="seismicOverlay">
            <h2>Seismic Data Processing</h2>
            <p>Substrata Oil and Gas Limited provides 2D, 3D and 4D seismic data processing and analysis including time processing, depth imaging, for oil & gas companies with combined seismic experience and the latest state-of-the-art computer systems and software to give our clients the best stratigraphic and structural geophysical services available. With our technical partner Geomage, we provide innovative processing solutions to the Oil and Gas industry. Geomage team comes with vast experience, processing the most difficult seismic. .</p>
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

    </>
}

export default Seismic