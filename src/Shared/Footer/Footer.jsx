
import bg from '../../images/bg4.jpg'
import bg1 from '../../images/bgc.jpg'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-zinc-700   text-white " style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                <div>
                    <h3 className='text-4xl font-bold text-center text-sky-400 '>Shine <br /> <span className='text-amber-400'>On</span> <br /> Summer</h3>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title text-2xl">Follow Us</span>
                    <a className="link link-hover"><FaFacebook></FaFacebook> </a>
                    <a className="link link-hover"><FaTwitter></FaTwitter></a>
                    <a className="link link-hover"><FaYoutube></FaYoutube></a>
                    <a className="link link-hover"><FaLinkedin></FaLinkedin></a>
                </div>
                <div>
                    <span className="footer-title text-2xl">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-2xl">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer >
            <footer className="footer footer-center p-4 bg-zinc-900  text-white" style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;