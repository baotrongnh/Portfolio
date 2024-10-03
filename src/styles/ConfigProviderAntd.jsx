import { ConfigProvider, theme as themeAntd } from "antd";
import './GlobalStyles.scss';
import propTypes from 'prop-types';
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function ConfigProviderAntd({ children }) {
     const { theme } = useContext(AppContext);

     return (
          <ConfigProvider theme={{
               token: {
                    fontFamily: 'DM Sans, sans- serif',
                    fontSize: 16,
                    colorPrimary: '#7A38FE',
               },
               algorithm: theme === 'light-theme' ? '' : themeAntd.darkAlgorithm
          }}>
               {children}
          </ConfigProvider>

     )
}

export default ConfigProviderAntd;

ConfigProviderAntd.propTypes = {
     children: propTypes.any
}