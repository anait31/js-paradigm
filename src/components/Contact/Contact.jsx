
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const notify = () => toast("Thanks For Provide Details!");

    return (
        <div className="bg-gray-200 md:h-[600px] px-3">
            <div className="py-9 md:w-[600px] mx-auto">
                <h2 className="text-center text-black text-4xl font-bold my-7">Please Provide Your Details</h2>
                <form className="text-center space-y-3" action="">
                    <input type="text" placeholder="Your Name" className="input input-bordered input-info w-full" required/>
                    <br />
                    <input type="email" placeholder="Your Email" className="input input-bordered input-info w-full" required/>
                    <br />
                    <input type="text" placeholder="Phone Number" className="input input-bordered input-info w-full" required/>
                    <br />
                    <input type="text" placeholder="Subject" className="input input-bordered input-info w-full" required/>
                    <br />
                    <textarea className="textarea textarea-accent w-full" placeholder="Ask Your Question" required></textarea>
                    <button onClick={notify} className="btn btn-info w-full ">Submit</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Contact;