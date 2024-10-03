import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AppProvider } from './contexts/AppContext.jsx';
import ConfigProviderAntd from './styles/ConfigProviderAntd.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <ConfigProviderAntd>
        <App />
      </ConfigProviderAntd>
    </AppProvider>
  </StrictMode>,
)
