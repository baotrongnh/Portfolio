import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
     const [theme, setTheme] = useState('dark-theme');

     return (
          <AppContext.Provider
               value={{
                    theme,
                    setTheme
               }}
          >
               {children}
          </AppContext.Provider>
     )
}

AppProvider.propTypes = {
     children: PropTypes.any
}