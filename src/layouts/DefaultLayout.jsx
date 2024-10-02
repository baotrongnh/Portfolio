import PropTypes from "prop-types";
import { Header } from "../components";

function DefaultLayout({ children }) {
     return (
          <>
               <Header />
               {children}
          </>

     );
}

export default DefaultLayout;

DefaultLayout.propTypes = {
     children: PropTypes.any
}