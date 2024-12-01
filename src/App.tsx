import {MantineProvider} from '@mantine/core'
import '@mantine/core/styles.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout.tsx"
import {AllProjects, Portfolio} from "./pages"
import {theme} from "./theme.ts"
import {Intro} from "./components";
import {useEffect, useState} from "react";

function App() {
    AOS.init({
        duration: 600
    })

    const [showIntro, setShowIntro] = useState<boolean>(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false)
        }, 2700)

        return () => clearTimeout(timer)
    })

    return (
        <MantineProvider theme={theme} defaultColorScheme='dark'>
            {showIntro ? <Intro/> :
                <div className='App'>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<DefaultLayout><Portfolio/></DefaultLayout>}/>
                            <Route path="/all-projects" element={<DefaultLayout><AllProjects/></DefaultLayout>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            }
        </MantineProvider>
    )
}

export default App

