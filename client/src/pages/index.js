import React from "react"
import Layout from "../components/Layout"
import "../stylesheets/index.css"
import { navigate, Link } from "gatsby";

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
    fetch(`http://127.0.0.1:5000/api/address?address=${this.state.address}&type=grocery`, {
      method: 'GET'
    }).then(response => {
      if (response.ok && response.status === 200) {
        return response.json();
      } else {
        throw new Error(`Invalid response, code ${response.status}`);
      }
    }).then(data => {
      console.log(data);
      navigate("/stores/", {
        state: { requestData: data}
      });
    }).catch(error => {
      console.log(error);
      this.setState({error: error});
    })
  }

  makeRequestCoords() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        fetch(`http://127.0.0.1:5000/api/coordinates?lat=${position.coords.latitude}&lng=${position.coords.longitude}&type=grocery`, {
          method: 'GET'
        }).then(response => {
          if (response.ok && response.status === 200) {
            return response.json();
          } else {
            throw new Error(`Invalid response, code ${response.status}`);
          }
        }).then(data => {
          console.log(data);
          navigate("/stores/", {
            state: { requestData: data }
          });
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
        <div className="Check Stores">
          <h3>Find the least crowded, and safest grocery stores (or other place types) in your area. Updated in realtime.</h3>
          <h4><Link to="/tips">Learn how to stay safe while shopping</Link></h4>
          <form>
            <input type="text" name="address" value={this.state.value} onChange={this.handleChange} aria-label="User Address" placeholder="Enter Your Address"></input>
            <br />
            <div id="search">
              <label htmlFor="findPlaceType">Find:
                <select id="placeType" name="placeType">
                  <option value="supermarket">Supermarket</option>
                  <option value="drugstore">Drug Store</option>
                  <option value="department_store">Department Store</option>
                </select>
              </label>
              <label htmlFor="distance">Distance:
                <select id="distance">
                  <option value="5km">5 km</option>
                  <option value="10km">10 km</option>
                  <option value="20km">20 km</option>
                  <option value="50km">50 km</option>
                </select>
              </label>
              <button type="button" onClick={() => this.makeRequestAddy()}>Go!</button>
            </div>
          </form>
          <br />
          <button id="current-location" type="button" onClick={() => this.makeRequestCoords()}>Click here to use your current location</button>
        </div>
        </Layout>
      </div>
    )
  }
}
export default Home;