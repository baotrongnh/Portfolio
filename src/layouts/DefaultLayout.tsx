import React from 'react'
import {Header} from "../components"

function DefaultLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default DefaultLayout