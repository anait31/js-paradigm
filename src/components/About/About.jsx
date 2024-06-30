import Galary from "../Galary/Galary";

const About = () => {
    return (
        <div className="max-w-[1280px] mx-auto text-center space-y-3">
            <h2 className="text-4xl font-bold mt-4">JS PARADIGM SDN BHD</h2>
            <div>
                <div>
                    <p className="text-xl">JS PARADIGM  is a certified company and provider of Data Management Services, Data Entry, Outsource Data Management Services, Data Conversion, Data Processing and back office services based in Kuala Lumpur, Malaysia. Our services transcend geographical boundaries as our clients are based in United States of America (USA), Canada, United Kingdom (UK), Spain, Australia (AUS), Switzerland, France, Netherlands, India, Israel, Japan, Hong Kong and Singapore. They include insurance companies, University, educational institutions, marketing firms, Margento and Ecommerce products Data Entry, media companies, medical research institutions, retail businesses and trade associations just to mention a few.</p>
                </div>
                <div className="mt-4">
                    <h3 className="text-4xl font-bold">Galary</h3>
                </div>
            </div>
            <Galary></Galary>
        </div>
    );
};

export default About;