import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

function PrivateRouteAuth({ children }) {
     let isAuthenticated = true;

     return (
          isAuthenticated ? children : <Navigate to='/' />
     )
}

export default PrivateRouteAuth

PrivateRouteAuth.propTypes = {
     children: PropTypes.any
}