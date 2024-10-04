import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
     const [theme, setTheme] = useState('dark-theme');
     const [isDrawer, setIsDrawer] = useState(false);

     return (
          <AppContext.Provider
               value={{
                    theme,
                    setTheme,
                    isDrawer, 
                    setIsDrawer
               }}
          >
               {children}
          </AppContext.Provider>
     )
}

AppProvider.propTypes = {
     children: PropTypes.any
}