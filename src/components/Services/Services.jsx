import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className="max-w-[1280px] mx-auto mb-8">
            <div className="text-center space-y-3 my-6">
                <h2 className="text-4xl font-bold">Services</h2>
                <p className="text-xl capitalize">Emerging concepts such as big data highlight just how valuable data is to entities. The potency of data cannot be tapped into if there is no mechanism for input. This is where we come in with our data entry services. We at JS PARADIGM  offer data entry services to different types of organizations that prefer outsourcing their data entry function to performing it in-house. Based on client feedback, our strengths include a highly professional team and a unique approach to data entry.</p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/132560881/original/a318f498f4f391a2ae31f623bcfe9e7b485ea365/do-all-data-entry-solutions.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Outsource Data Entry Services</h2>
                        <p>Magento Product data entry</p>
                        <p>PDF To Excel Data Entry</p>
                        <p>Offline Data Entry</p>
                        <p>Medical Billing Data Entry</p>
                        <p>Legal Data Entry</p>
                        <div className="card-actions mt-2">
                            <Link to='/contact'><button className="btn btn-info">Contact Now</button></Link>
                        </div>
                    </div>

                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://www.managedoutsource.com/wp-content/uploads/2019/05/key-strategies-for-successful-data-conversion.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Data Conversion</h2>
                        <p>Document Conversion</p>
                        <p>Catalog Conversion</p>
                        <p>PDF Conversion</p>
                        <p>Data Extraction</p>
                        <p>Data Scrapping</p>
                        <div className="card-actions mt-2">
                            <Link to='/contact'><button className="btn btn-info">Contact Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://www.indiadataentry.co.uk/images/services/web-research.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web Research</h2>
                        <p>Web Data Extraction</p>
                        <p>Web Scrapping Service</p>
                        <p>Market Research</p>
                        <p>Data Research</p>
                        <p>Market And Legal Research</p>
                        <div className="card-actions mt-2">
                            <Link to='/contact'><button className="btn btn-info">Contact Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/05/What-is-Data-Processing-1.jpg.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Data Processing</h2>
                        <p>Insurance Claim Processing</p>
                        <p>Image Processing</p>
                        <p>Claim Processing Services</p>
                        <p>Data Mining Processing</p>
                        <p>Survey Processing</p>
                        <div className="card-actions mt-2">
                            <Link to='/contact'><button className="btn btn-info">Contact Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://www.rayvat.com/assets/images/Forms-Processing.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Form Processing</h2>
                        <p>Product Registration Forms</p>
                        <p>Examination Forms Processing</p>
                        <p>Healthcare Check-up Forms</p>
                        <p>Mortgage Forms Processing</p>
                        <p>Survey Form Processing</p>
                        <div className="card-actions mt-2">
                            <Link to='/contact'><button className="btn btn-info">Contact Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://www.indiainternets.com/img/seo-service.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">SEO and Web Services</h2>
                        <p>SEO Services</p>
                        <p>Web Design Development</p>
                        <p>Web Content Writing</p>
                        <p>Logo Design</p>
                        <p>SMO Services</p>
                        <div className="card-actions mt-2">
                            <Link to='/contact'><button className="btn btn-info">Contact Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;