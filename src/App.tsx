import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout.tsx"
import { AllProjects, Portfolio } from "./pages"
import { theme } from "./theme.ts"

function App() {

    return (
        <MantineProvider theme={theme} defaultColorScheme='dark'>
            <div className='App'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<DefaultLayout><Portfolio /></DefaultLayout>} />
                        <Route path="/all-projects" element={<DefaultLayout><AllProjects /></DefaultLayout>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </MantineProvider>
    )
}

export default App
