import React from "react"
import "./layout.css"

export default function Layout(props) {
    return (
        <div className="storeCard">
            <h2>{props.storeName}</h2>
        </div>
    )
}