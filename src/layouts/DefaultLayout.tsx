import { Header } from "@/components/custom"
import React from "react"

interface DefaultLayoutProps {
     children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
     return (
          <>
               <Header />
               {children}
          </>
     )
}
