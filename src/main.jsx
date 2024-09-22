import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ConfigProviderAntd from './styles/ConfigProviderAntd.jsx'
import { AppProvider } from './contexts/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <ConfigProviderAntd>
        <App />
      </ConfigProviderAntd>
    </AppProvider>
  </StrictMode>,
)
