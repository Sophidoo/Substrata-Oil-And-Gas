import { NavLink } from "react-router-dom";
import {CiFacebook} from "react-icons/ci"
import {AiOutlineInstagram, AiTwotoneMail} from "react-icons/ai"
import {RiTwitterXFill} from "react-icons/ri"
import {BsFillTelephoneFill} from "react-icons/bs"
import {ImLocation} from "react-icons/im"
import "../styles/components/Footer.css"
import logo from "../assets/images/SOGLogo_2-removebg-preview 1.png"

const Footer = () => {

    return<>
        <footer>
            <ul className="companyInfo">
            <img src={logo} alt="" />
            <h3>Substrata Oil And Gas</h3>
                <p>Created by a group of experienced industry Professionals to ensure quality services are available at cost effective and efficient rates to operators in the Oil and Gas industry in Nigeria.</p>
            </ul>

            <ul>
                <h3>Our Services</h3>
                <ul className="footer_menu">
                    <NavLink to={"/"}>Drilling Services</NavLink>
                    <NavLink to={"/about"}>Seismic Data Proccessing</NavLink>
                    <NavLink to={"/faq"}>Engineering Services</NavLink>
                    <NavLink to={"/contact"}>Well Services</NavLink>
                </ul>
            </ul>
            <ul>
                <h3>Useful Link</h3>
                <ul  className="footer_menu">
                    <NavLink>About Us </NavLink>
                    <NavLink>Career</NavLink>
                    <NavLink>HSE</NavLink>
                    <NavLink>Contact Us</NavLink>
                </ul>
            </ul>
            <div className="contact">
                <h3>Contact</h3>
                <ul  className="footer_menu">
                    <p><BsFillTelephoneFill/>+234 (84) 302879</p>
                    <p><AiTwotoneMail/> info@substrataoilandgas.com</p>
                    <p><ImLocation/> Plot 59 Professor Okujagu street, off Trans Amadi road, Port Harcourt.</p>

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
        <span> &copy; 2021 Copyright: &nbsp;</span>
            SUBSTRATA OIL AND GAS
        </div>
    </>

}

export default Footer;