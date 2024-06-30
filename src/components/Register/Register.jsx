import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegisterForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        // const phone = e.target.phone.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            console.log('Hello',result.user);

        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="md:w-1/4 mx-auto">
            <h1 className="text-3xl text-center font-semibold mt-6 mb-[-20px]">Please Register</h1>
            <form onSubmit={handleRegisterForm} className="card-body ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="phone" placeholder="Phone" className="input input-bordered" />
                </div> */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div>
                    <p>Already Have an Accout? Please <Link to='/login' className="text-blue-700 underline">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;