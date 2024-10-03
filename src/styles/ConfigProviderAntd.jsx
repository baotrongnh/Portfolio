import { ConfigProvider } from "antd";
import './GlobalStyles.scss';
import propTypes from 'prop-types';

function ConfigProviderAntd({ children }) {
     return (
          <ConfigProvider theme={{
               token: {
                    fontFamily: 'DM Sans, sans- serif',
                    fontSize: 16,
                    colorPrimary: '#333',
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