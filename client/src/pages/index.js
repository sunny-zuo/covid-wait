import React from "react"
import Layout from "../components/Layout"
import "../stylesheets/index.css"

class Home extends React.Component {
  componentDidMount() {
    /*
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(`${position.coords.latitude}, ${position.coords.longitude}`)
      });
    }*/
  }

  render() {
    return (
      <div>
        <Layout>
        <div className="nav">
            <p>Home</p>
            <p>Check Stores</p>
            <p>Covid Safety Tips</p>
        </div>
          <div class="Check Stores">
          <h3>Find the least crowded, and safest grocery stores (or other place types) in your area. Updated in real time.</h3>
          <form>
            <input type="text" name="address" aria-label="User Address" placeholder="Enter Your Location"></input>
            <br/>
            <div id="search">
            <label id="findPlaceType">Find:</label>
            <select id="placeType" name="placeType">
              <option value="supermarket">Supermarket</option>
              <option value="drugstore">Drug Store</option>
              <option value="department_store">Department Store</option>
            </select> 
            <label id="distance">Distance:</label>
            <select id="distance">
              <option value="5km">5 km</option>
              <option value="10km">10 km</option>
              <option value="20km">20 km</option>
              <option value="50km">50 km</option>
            </select>
            <button onClick={makeRequestAddy}>Go!</button>
            </div>
          </form>
        
          
          <br/>
          <button onClick={getLocation} id="current-location">Click here to use your current location</button>
        </div>
        </Layout>
      </div>
    )
  }
}

function getLocation() {
  if (navigator.geolocation) {
    console.log('has geolocation');
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(`coords: ${position.coords.latitude}, ${position.coords.longitude}`)
    }, (error) => {console.log(error)});
  } else {
    console.log('no geolocation')
  }
}

async function makeRequestCoords(position) {
  let response = await fetch('API_URL', {
    method: 'GET'
  })

  if (response.status === 200) {
    console.log(response.json());
  } else {
    console.log('error making request');
  }
}

async function makeRequestAddy() {
  let response = await fetch('API_URL', {
    method: 'GET'
  })

  if (response.status === 200) {
    console.log(response.json());
  } else {
    console.log('error making request');
  }
}

export default Home;