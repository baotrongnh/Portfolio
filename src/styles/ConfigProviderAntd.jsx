import { ConfigProvider } from "antd";
import './GlobalStyles.scss';
import propTypes from 'prop-types';

function ConfigProviderAntd({ children }) {
     return (
          <ConfigProvider theme={{
               token: {
                    fontFamily: 'Segoe UI, Arial, sans-serif',
                    fontSize: 16,
                    // colorPrimary: '#00DD73',
               }
          }}>
               {children}
          </ConfigProvider>

     )
}

export default ConfigProviderAntd;

ConfigProviderAntd.propTypes = {
     children: propTypes.any
}