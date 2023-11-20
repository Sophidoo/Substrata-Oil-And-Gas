import { NavLink } from "react-router-dom";
import {CiFacebook} from "react-icons/ci"
import {AiOutlineInstagram, AiTwotoneMail} from "react-icons/ai"
import {RiTwitterXFill} from "react-icons/ri"
import {BsFillTelephoneFill} from "react-icons/bs"
import {ImLocation} from "react-icons/im"
import "../styles/components/Footer.css"

const Footer = () => {

    return<>
        <footer>
            <ul className="companyInfo">
            <img src="" alt="" />
                <p>Unix Training Academy is a full-featured Unix/Linux training with everything you need to learn Linux System Administration and new IT skills in DevOps, AWS, and many more resources</p>
            </ul>

            <ul>
                <h3>Links</h3>
                <ul className="footer_menu">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/about"}>About Us</NavLink>
                    <NavLink to={"/faq"}>FAQ's</NavLink>
                    <NavLink to={"/contact"}>Contact Us</NavLink>
                    <NavLink>Privacy Policy</NavLink>
                    <NavLink>Terms and Coniditions</NavLink>
                </ul>
            </ul>
            <ul>
                <h3>Courses</h3>
                <ul  className="footer_menu">
                    <NavLink>Linux </NavLink>
                    <NavLink>DevOps</NavLink>
                    <NavLink>Aws</NavLink>
                    <NavLink>Red Hat</NavLink>
                </ul>
            </ul>
            <div className="contact">
                <h3>Contact</h3>
                <ul  className="footer_menu">
                    <p><BsFillTelephoneFill/> 3464062002</p>
                    <p><AiTwotoneMail/> support@unixtrainingacademy.com</p>
                    <p><ImLocation/> Suite 430G, 9898 Bissonnet Street, Houston TX 77036</p>

                    <div className="social">
                        <h3>Join us on social media</h3>
                        <div className="footer_links">
                            <CiFacebook/>
                            <RiTwitterXFill/>
                            <AiOutlineInstagram/>
                        </div>
                    </div>
                </ul>
            </div>
        </footer>
        <div className="copyright">
            &copy; All Rights Reserved, CodeSpace Hackers
        </div>
    </>

}

export default Footer;