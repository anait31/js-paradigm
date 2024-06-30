import { Link } from "react-router-dom";
import { BsDatabaseFillDown } from "react-icons/bs";
import { MdOutlineDataThresholding } from "react-icons/md";
import { SiWebstorm, SiScrapy } from "react-icons/si";
import { TbForms, TbCaptureFilled } from "react-icons/tb";
import { GiExtractionOrb, GiRugbyConversion } from "react-icons/gi";
import team from '../../assets/team.jpg'
import Questions from "../Questions/Questions";




const Home = () => {
    return (
        <div className="bg-stone-100">
            <div className="max-w-[1280px] mx-auto">
                {/* Hero Section */}
                <div className="hero md:min-h-[600px] rounded-b-md overflow-hidden" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-2xl md:text-6xl font-bold">Secure IT Solutions for more secure environment</h1>
                            <p className="mb-5">JS PARADIGM works both promptly and professionally. We praise them for their excellent job of our image scanning, OCR and <br /> proof-reading project and I would most definitely use them in future for our other projects.</p>
                            <Link to='/services'><button className="btn btn-info">Read More..!</button></Link>
                        </div>
                    </div>
                </div>
                {/* Services Section */}
                <div className="my-6 md:my-12">
                    <div className="text-center space-y-3">
                        <h2 className="text-4xl font-bold">Our Services</h2>
                        <p className="text-2xl capitalize">Get it done fast, cost effectively with professional results</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5 mx-3 md:mx-0 font-bold">
                        <div className="bg-slate-200 p-6 text-center space-y-3 rounded-md shadow-xl">
                            <div className="text-4xl ml-14 md:ml-28 animate-bounce w-6 h-6">
                                <BsDatabaseFillDown></BsDatabaseFillDown>
                            </div>
                            <p>Data Entry Services</p>
                            <div className="text-[12px]">
                                <p>PDF To Excel Data Entry</p>
                                <p>Medical Billing Data Entry</p>
                            </div>
                        </div>
                        <div className="bg-slate-200 p-6 text-center space-y-3 rounded-md shadow-xl">
                            <div className="text-4xl ml-14 md:ml-28 animate-bounce w-6 h-6">
                                <MdOutlineDataThresholding></MdOutlineDataThresholding>
                            </div>
                            <p>Data Processing</p>
                            <div className="text-[12px]">
                                <p>Data Mining Processing</p>
                                <p>Survey Processing</p>
                            </div>
                        </div>
                        <div className="bg-slate-200 p-6 text-center space-y-3 rounded-md shadow-xl">
                            <div className="text-4xl ml-14 md:ml-28 animate-bounce w-6 h-6">
                                <GiRugbyConversion></GiRugbyConversion>
                            </div>
                            <p className="">Data Conversion</p>
                            <div className="text-[12px]">
                                <p>Document Conversion</p>
                                <p>PDF Conversion</p>
                            </div>
                        </div>
                        <div className="bg-slate-200 p-6 text-center space-y-3 rounded-md shadow-xl">
                            <div className="text-4xl ml-14 md:ml-28 animate-bounce w-6 h-6">
                                <TbForms></TbForms>
                            </div>
                            <p>Form Processing</p>
                            <div className="text-[12px]">
                                <p>Product Registration Forms</p>
                                <p>Survey Form Processing</p>
                            </div>
                        </div>
                        <div className="bg-slate-200 p-6 text-center space-y-3 rounded-md shadow-xl">
                            <div className="text-4xl ml-14 md:ml-28 animate-bounce w-6 h-6">
                                <SiWebstorm></SiWebstorm>
                            </div>
                            <p>Web Research</p>
                            <div className="text-[12px]">
                                <p>Web Data Extraction</p>
                                <p>Web Scrapping Service</p>
                            </div>
                        </div>
                        <div className="bg-slate-200 p-6 text-center space-y-3 rounded-md shadow-xl">
                            <div className="text-4xl ml-14 md:ml-28 animate-bounce w-6 h-6">
                                <SiScrapy></SiScrapy>
                            </div>
                            <p>Data Scrapping</p>
                            <div className="text-[12px]">
                                <p>Web Data Extraction</p>
                                <p>Web Scrapping Service</p>
                            </div>
                        </div>
                        <div className="bg-slate-200 p-6 text-center space-y-3 rounded-md shadow-xl">
                            <div className="text-4xl ml-14 md:ml-28 animate-bounce w-6 h-6">
                                <TbCaptureFilled></TbCaptureFilled>
                            </div>
                            <p>Data Capture</p>
                            <div className="text-[12px]">
                                <p>Automated Data Capture</p>
                                <p>Sensor Data Capture</p>
                            </div>
                        </div>
                        <div className="bg-slate-200 p-6 text-center space-y-3 rounded-md shadow-xl">
                            <div className="text-4xl ml-14 md:ml-28 animate-bounce w-6 h-6">
                                <GiExtractionOrb></GiExtractionOrb>
                            </div>
                            <p>Data Extraction</p>
                            <div className="text-[12px]">
                                <p>Extract Data from Databases</p>
                                <p>Extract Data from APIs</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Choose Section */}
                <div>
                    <div className="text-center space-y-3">
                        <h2 className="text-4xl font-bold">Why Choose Us?</h2>
                        <p className="text-2xl capitalize">We have more than 10 years experience to work with Data for clients all over the world.</p>
                    </div>
                    <div className="md:flex md:gap-4 md:my-6 justify-center items-center">
                        <div className="w-1/2 text-xl">
                            <li>Fully-managed services</li>
                            <li>Dedicated 24/7 customer support</li>
                            <li>Flexible packages that suit every level of organization </li>
                            <li>An experienced team that can handle data of any complexity and volume</li>
                            <li>Ready-to-use clean and structured data</li>
                            <li>We use up-to-date technology for faster and accurate results.</li>
                        </div>
                        <div className="w-1/2">
                            <img className="object-contain w-full rounded-md" src={team} alt="" />
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
                {/* Partner Section */}
                {/* <div className="text-center space-y-3 my-10">
                    <h2 className="text-4xl font-bold">Our Partners</h2>
                    <p className="text-2xl capitalize">List of the Top companies in Malaysia</p>
                </div>
                <Partners></Partners> */}

                {/* Ask Question Section */}
                <div className="text-center space-y-3 my-10">
                    <h2 className="text-4xl font-bold">Have A Question?</h2>
                    <p className="text-2xl capitalize">Please have quick look at the bottom section</p>
                </div>
                <Questions></Questions>
            </div>
        </div>
    );
};

export default Home;