import React from "react"
import Layout from "../components/Layout"
import "../stylesheets/index.css"

export default function Home() {
  return (
    <div>
      <Layout>
        <div class="nav">
            <p>Home</p>
            <p>About</p>
            <p>Check Stores</p>
            <p>Covid Safety Tips</p>
        </div>
        <div class="about">
          <h2>About COVID Wait</h2>
        </div>
        <div class="Check Stores">
          <h2>Check Nearby Stores</h2>
          <form>
            <input type="text" placeholder="Enter Location"></input>
          </form>
        </div>
      </Layout>
    </div>
  )
}
