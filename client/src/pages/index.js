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
        <a id="top"></a>
        <Layout>
        <div className="nav">
            <a href="#top">Home</a>
            <a href="#search">Check Stores</a>
            <a href="#tips">Covid Safety Tips</a>
        </div>
          <div className="Check Stores">
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
        <div className="tips">
          <h2>Tips to Stay Safe While Grocery Shopping</h2>
          <h3>To help protect yourself, essential grocery store workers, and other shoppers, keep these tips in mind:</h3>
          <ol id="tips">
            <li className="box1">Avoid going to stores if you're sick, even with mild symptoms</li>
            <li className="box2">Wear a face mask. Some stores may make face coverings mandatory.</li>
            <li className="box1">Go alone and avoid going during peak times</li>
            <li className="box2">Practice social distancing by keeping at least 2 metres (6 ft) apart from other shoppers and employees.</li>
            <li className="box1">Resist the urge to panic buy, and instead only purchase 1-2 weeks worth of groceries at a time in order to avoid creating unnecessary demand and temporary shortages.</li>
            <li className="box2">Prepare a shopping list to help minimize the amount of time you spend in the store</li>
            <li className="box1">Wash your hands with warm water and soap before heading out, when you return home, and after putting away your groceries. If soap and water are not avaliable, use alcohol based hand sanitizer that contains at leasy 60% alcohol. Make sure to keep your hands away from your face.</li>
            <li className="box2">Only handle produce you intend to buy</li>
            <li className="box1">Use disinfectant wipes (either use the ones provided by the store or bring your own) to wipe down the handles of your shopping cart or basket. If you choose to use reusable shopping bags, make sure that they area cleaned and washed before/after every use.</li>
          </ol>
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