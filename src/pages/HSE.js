import { useEffect } from "react";
import cert from "../assets/images/1.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Careers.css";

const HSE = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="hseHero">
        <div className="leftHse">
          <h3>QHSE at Substrata</h3>
          <p>
            As an ISO certified company we have an unflinching Quality, Health,
            Safety and Environmental culture in Substrata.
          </p>
          <ul>
            <h4>It’s Substrata’s policy to:</h4>
            <li>
              Continuously pursue the goal of no harm to people and the
              environment.
            </li>
            <li>Manage HSE matters as any other critical business activity.</li>
            <li>
              Promote a culture in which all Substrata employees share this
              commitment.
            </li>
          </ul>
          <ul>
            <h4>The implications of this policy are that:</h4>
            <li>
              All activities shall be analyzed to systematically identify
              related hazards, risks and sensitivities.
            </li>
            <li>
              Arrangements shall be put in place to control the hazards, risks
              and sensitivities and to deal with consequences should they arise.
            </li>
            <li>
              Continually assess environmental impact and reduce it to a level
              as low as practicable.
            </li>
            <li>
              Include HSE performance in the appraisal of all staff and reward
              accordingly.
            </li>
          </ul>
          <p>
            As HSE remains the responsibility of each and every one of us, every
            employee and contractor employee must plan and perform his work in
            accordance with this policy, this policy shall be a high level
            document, clearly understood by all staff, distributed to all and we
            shall all be guided by this policy.
          </p>
          <p>
            The goal of our Quality, Health, Safety, and Environment (QHSE)
            policy is to actively contribute to the performance and
            sustainability of Substrata, based on principles of ongoing
            improvement and sustainable development.
          </p>
          <p>
            We strongly believe that our actions or inactions can grossly affect
            our results and our environment.
          </p>
        </div>
        <div className="rightHse">
          <img src={cert} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HSE;
