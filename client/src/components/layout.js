import React from "react"
import "./layout.css"
import Header from "../components/Header"

export default function Layout({children}) {
    return (
        <div className="application">
            <Header />
            <div className="layout">
                {children}
            </div>
        </div>
    )
}