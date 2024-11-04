import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from "./pages"
import DefaultLayout from "./layouts/DefaultLayout.tsx"
import '@mantine/core/styles.css'
import {MantineProvider, createTheme, MantineColorsTuple} from '@mantine/core'

function App() {
    const myColor: MantineColorsTuple = [
        '#f6eeff',
        '#e7d9f7',
        '#cab1ea',
        '#ad86dd',
        '#9462d2',
        '#854bcb',
        '#7d3fc9',
        '#6b31b2',
        '#5f2ba0',
        '#52238d'
    ]

    const theme = createTheme({
        colors: {
            myColor,
        },
        primaryColor: 'myColor',
    })

    return (
        <MantineProvider theme={theme} defaultColorScheme='dark'>
            <div className='App'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<DefaultLayout><Home/></DefaultLayout>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </MantineProvider>
    )
}

export default App
