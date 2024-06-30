import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { IoLogoGoogle, IoLogoTwitter } from "react-icons/io";

const Login = () => {

    const { loginUser, googleLogin, twitterLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginForm = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/')

            })
            .catch(error => {
                console.log(error.mesasge);
            })
    }

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // const handleGithubSignIn = () => {
    //     githubLogin()
    //         .then(() => {
    //             navigate('/')
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //         })
    // }

    const handleTwitterSignIn = () => {
        twitterLogin()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div className="md:w-1/4 mx-auto">
                <h1 className="text-3xl text-center font-semibold mt-6 mb-[-20px]">Please Login</h1>
                <form onSubmit={handleLoginForm} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-outline btn-info">Login</button>
                    </div>
                    <div>
                        <p>New to this website? Please <Link to='/register' className="text-blue-700 underline">Register</Link></p>
                    </div>
                </form>
                <div className="mb-8 px-8">
                    <div className="divider divider-info ">Sign In With</div>
                    <div className="space-x-4 mt-8 text-center">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info">Google <IoLogoGoogle></IoLogoGoogle></button>
                        <button onClick={handleTwitterSignIn} className="btn btn-outline btn-info">Twitter <IoLogoTwitter></IoLogoTwitter></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;