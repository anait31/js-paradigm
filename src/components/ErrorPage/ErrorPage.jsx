import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-12 space-y-2">
            <h2 className="text-4xl font-bold">Oopss..!</h2>
            <p className="text-2xl font-bold">Currently Not Available</p>
            <Link className="underline text-blue-600" to='/'>Go Back</Link>
        </div>
    );
};

export default ErrorPage;