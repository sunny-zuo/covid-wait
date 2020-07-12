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
            <p>Home</p>
            <p>Check Stores</p>
            <p>Covid Safety Tips</p>
          </div>
          <div className="Check Stores">
            <h2>Check Nearby Stores</h2>
            <h3>Find the least crowded, and safest grocery stores (or other place types) in your area. Updated in real time.</h3>
            <form>
              <input type="text" name="address" value={this.state.value} onChange={this.handleChange} aria-label="User Address" placeholder="Enter Your Address"></input>
              <br />
              <label id="findPlaceType">Find:</label>
              <select id="placeType" name="placeType">
                <option value="supermarket">Supermarket</option>
                <option value="drugstore">Drug Store</option>
                <option value="department_store">Department Store</option>
              </select>
            </form>
            <button onClick={() => this.makeRequestAddy()}>Go!</button>

            <br />
            <button onClick={() => this.makeRequestCoords()}>Click here to use your current location</button>
          </div>
        </Layout>
      </div>
    )
  }
}
/*
function getLocation() {
  if (navigator.geolocation) {
    console.log('has geolocation');
    navigator.geolocation.getCurrentPosition(makeRequestCoords, (error) => {console.log(error)});
  } else {
    console.log('no geolocation')
  }
}

async function makeRequestCoords(position) {
  console.log(`coords: ${position.coords.latitude}, ${position.coords.longitude}`)
  let response = await fetch('http://127.0.0.1:5000/', {
    method: 'GET'
  })

  if (response.status === 200) {
    console.log(response.json());
  } else {
    console.log('error making request');
  }
}
*/
export default Home;