import { ThemeProvider } from "@/components/theme-provider"
import "./App.css"
import DefaultLayout from "./layouts/DefaultLayout"
import { Home } from "./pages"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      </ThemeProvider>
    </>
  )
}

export default App
