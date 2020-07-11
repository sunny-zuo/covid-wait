import React from "react"
import Layout from "../components/Layout"

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
          <h3>Find the least crowded, and safest grocery stores (or other place types) in your area. Updated in real time.</h3>
          <form>
            <input type="text" name="address" aria-label="User Address" placeholder="Enter Your Address"></input>
            <br/>
            <label>Find:</label>
            <select id="placeType" name="placeType">
              <option value="supermarket">Supermarket</option>
              <option value="drugstore">Drug Store</option>
              <option value="department_store">Department Store</option>
            </select> 
          </form>
          <button onClick={makeRequestAddy}>Go!</button>

          <br/>
          <button onClick={getLocation}>Click here to use your current location</button>
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

function makeRequestCoords(position) {

}

function makeRequestAddy() {

}

export default Home;