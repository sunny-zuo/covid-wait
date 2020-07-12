import React from "react"
import Layout from "../components/Layout"
import "../stylesheets/index.css"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      address: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  makeRequestAddy() {
    fetch(`http://127.0.0.1:5000/api/address?address=${this.state.address}`, {
      method: 'GET'
    }).then(response => {
      if (response.ok && response.status === 200) {
        return response.json();
      } else {
        throw new Error(`Invalid response, code ${response.status}`);
      }
    }).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
      this.setState({error: error});
    })
  }

  makeRequestCoords() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        fetch(`http://127.0.0.1:5000/api/coordinates?lat=${position.coords.latitude}&lng=${position.coords.longitude}`, {
          method: 'GET'
        }).then(response => {
          if (response.ok && response.status === 200) {
            return response.json();
          } else {
            throw new Error(`Invalid response, code ${response.status}`);
          }
        }).then(data => {
          console.log(data);
        }).catch(error => {
          console.log(error);
          this.setState({ error: error });
        })
      }, error => {
        console.log(error);
      })
    }
  }

  render() {
    return (
      <div>
        <Layout>
        <div className="nav">
            <p><a href="#top">Home</a></p>
            <p><a href="#search">Check Stores</a></p>
            <p><a href="#tips">Covid Safety Tips</a></p>
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
          <div className="nav">
            <p>Home</p>
            <p>Check Stores</p>
            <p>Covid Safety Tips</p>
          </div>
          <div className="Check Stores">
            <h3>Find the least crowded, and safest grocery stores (or other place types) in your area. Updated in real time.</h3>
            <form>
              <input type="text" name="address" value={this.state.value} onChange={this.handleChange} aria-label="User Address" placeholder="Enter Your Address"></input>
              <br />
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
                <button type="button" onClick={() => this.makeRequestAddy()}>Go!</button>
              </div>
            </form>
            <br />
            <button onClick={() => this.makeRequestCoords()}>Click here to use your current location</button>
          </div>
          <div className="tips">
            <h2>Tips to Stay Safe While Grocery Shopping</h2>
            <h3>To help protect yourself, essential grocery store workers, and other shoppers, keep these tips in mind:</h3>
            <ol>
              <li>Avoid going to stores if you're sick, even with mild symptoms</li>
              <li>Wear a face mask. Some stores may make face coverings mandatory.</li>
              <li>Go alone and avoid going during peak times</li>
              <li>Practice social distancing by keeping at least 2 metres (6 ft) apart from other shoppers and employees.</li>
              <li>Resist the urge to panic buy, and instead only purchase 1-2 weeks worth of groceries at a time in order to avoid creating unnecessary demand and temporary shortages.</li>
              <li>Prepare a shopping list to help minimize the amount of time you spend in the store</li>
              <li>Wash your hands with warm water and soap before heading out, when you return home, and after putting away your groceries. If soap and water are not avaliable, use alcohol based hand sanitizer that contains at leasy 60% alcohol. Make sure to keep your hands away from your face.</li>
              <li>Only handle produce you intend to buy</li>
              <li>Use disinfectant wipes (either use the ones provided by the store or bring your own) to wipe down the handles of your shopping cart or basket. If you choose to use reusable shopping bags, make sure that they area cleaned and washed before/after every use.</li>
            </ol>
          </div>
        </Layout>
      </div>
    )
  }
}
export default Home;