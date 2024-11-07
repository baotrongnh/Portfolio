import React from 'react'
import { Footer, Header } from "../components"

function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default DefaultLayout