import React from "react"
import { Link } from "gatsby"
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <Link to="/"><h1>COVID Wait</h1></Link>
        </div>
    )
}