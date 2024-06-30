import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Navigate } from "react-router-dom";
import {PropTypes} from 'prop-types'

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if(loading) {
        return
    }

    if (user) {
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}