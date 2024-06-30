
const Questions = () => {
    return (
        <div className="mb-9">
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    Do you feel that our services provide good value for the price you pay?
                </div>
                <div className="collapse-content">
                    <p>Yes, I believe the services provide good value for the money. The quality and support justify the cost.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    Would you consider renewing your contract with us when it expires?
                </div>
                <div className="collapse-content">
                    <p>Yes, I would consider renewing the contract. We are happy with the services and support provided.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    What types of IT services do you offer?
                </div>
                <div className="collapse-content">
                    <p>We offer a wide range of IT services, including managed IT support, cloud services, network security, software development, and IT consulting. Our goal is to provide comprehensive solutions tailored to meet your specific business needs.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    How long have you been in business?
                </div>
                <div className="collapse-content">
                    <p>We have been in business for over 10 years, providing reliable IT solutions to businesses of all sizes across various industries.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    How quickly can you respond to a technical issue?
                </div>
                <div className="collapse-content">
                    <p>Our response time depends on the severity of the issue. For critical issues, we aim to respond within 30 minutes. For less urgent matters, our team typically responds within 1-2 hours.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    What is your approach to data security?
                </div>
                <div className="collapse-content">
                    <p>We take data security very seriously. Our approach includes implementing robust encryption, regular security audits, continuous monitoring, and compliance with industry standards and regulations. We also offer customized security solutions to address your specific needs.</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;