import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import GlobalStyle from "./styles/GlobalStyle.tsx"

createRoot(document.getElementById('root')!).render(
    <GlobalStyle>
        <App />
    </GlobalStyle>
)