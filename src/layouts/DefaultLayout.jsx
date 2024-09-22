import PropTypes from "prop-types";

function DefaultLayout({ children }) {
     return (
          children
     );
}

export default DefaultLayout;

DefaultLayout.propTypes = {
     children: PropTypes.any
}