import { Link } from "react-router-dom";
import logo from '../../assets/js.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#16697A] text-white">
                <div className="footer max-w-[1280px] mx-auto">
                    <aside>
                        <img className="h-[90px]" src={logo} alt="" />
                        <p>JS Paradigm SDN BHD<br />Providing reliable tech since 2014</p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Data Entry Services</a>
                        <a className="link link-hover">Web Research</a>
                        <a className="link link-hover">Data Conversion</a>
                        <a className="link link-hover">Data Processing</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <Link to='/about' className="link link-hover">About us</Link>
                        <Link to='/contact' className="link link-hover">Contact</Link>
                        <Link to='/jobs' className="link link-hover">Jobs</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;