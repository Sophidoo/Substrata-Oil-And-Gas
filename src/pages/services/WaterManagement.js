import Navbar from "../../components/Navbar"
import "../../styles/services/WaterManagement.css"
import table from "../../assets/images/wmtable.png"
import Footer from "../../components/Footer";

const WaterManagement = () => {
    return<>
    <Navbar/>
        <section className="waterManagementWrapper">
            <div className="overlay service">
                <h2>Produced Water Management Service</h2>
                <p>We offer an array of specialized oil field services, including Oil Well Cementing, Fishing Services, Downhole Camera Services, Slickline and Wireline Services, and Drilling Support Services, encompassing OCTGs, DD, and FEWD. Our expertise ensures efficient and reliable solutions for the oil and gas industry's diverse operational needs.</p>
            </div>
        </section>
        <section className="topContent">
            <p>Produced water (PW) is produced alongside hydrocarbons in Oil and Gas production. PW is ancient water in geological formations that were once the bottom of the seas.</p>
            <p>In recent years PW management has become a greater problem. As the Oilfield is getting matured there is a tendency for increased production of water. In some cases, Basic Sediments and Water BS&W can be up to 90%. This means that 90% of the production is water, water being the larger component of the BS&W. Produced Water represents the largest volume of polluted effluent.</p>
            <p>The effect of effluent discharged offshore may be diluted and dissipated by currents, reducing the hazards to the environment. Effluents discharged on land or into brackish waters may undergo comparatively little dilution, especially during the dry season, and may pose a hazard to aquatic organisms and people living in such environments who consume the water. The threat to the human population may occur through the consumption of contaminated organisms and drinking of water from contaminated rivers or wells.</p>
            <p>The Nigerian Upstream Petroleum Regulatory Commission (NUPRC) formerly known as Directorate of Petroleum Resources (DPR) has strict restrictions on the disposal of produced water.</p>
            <p>The table below details the NUPRC regulations limits on PW;</p>
        </section>
        <section className="managementTable">
            <div className="toverlay">
                <img src={table} alt="" />
            </div>
        </section>
        <section className="bottomContent">
            <p>Produced water can have significantly higher levels of trace metals, phenolic compounds and other toxic materials. Therefore, to preserve, restore and maintain the chemical, physical and biological integrity of the nation’s waters, oil and gas installation operators are required to ensure that the levels of pollution control technology are fully in line with the Best Practicable Control Technology Currently Available which represents the average of the best existing performances of well-known technologies for the control of these specific pollutants.</p>
            <p>The regulation stipulates that;.</p>
            <p>a) Produced formation/oily waters, for Inland/Nearshore Areas, shall not be discharged into inland and nearshore areas. The disposal options are injection into disposal wells or re-injection to a reservoir (sub-surface stratum or strata) approved for the purpose. – ZERO DISCHARGE.</p>
            <p>b) Produced formation/oily waters may be discharged into offshore and deepwater areas provided the following conditions are satisfied;
            <ul>
                <li>An Oily water treatment system, designed to maintain the treatment efficiency during load variations and to operate with minimum chemical addition, shall be installed;</li>
                <li>The oil shall be separated from the produced/oily water</li>
                <li>As a minimum, the concentration of the dispersed oil in the water to be discharged, shall not exceed 40mg/l (monthly average, otherwise the produced formation/oily waters shall be re-injected;</li>
            </ul></p>
            <p>At Substrata we help our esteemed clients handle the problems of PW with the best-in-class, most cost-effective and most efficient solutions to their PW challenges. As our core business and with our foreign technical partners, we are always abreast of the latest technologies and regulations in PW treatment and management.</p>
            <p>In handling PW challenges “one size doesn’t fit all”!. Our approach is to carry out an in-depth study of our client’s operations, which includes a laboratory study of the PW, and work with the client to develop/design a bespoke best-in-class, cost-effective and cost-efficient solution to the PW challenges.</p>
        </section>
        <Footer/>

    </>
}

export default WaterManagement