import React from "react"
import "./storeCard.css"

class StoreCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            busy: ''
        }
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:5000/api/popularity?place_id=${this.props.placeID}`, {
            method: 'GET'
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({busy: data.result?.current_popularity});
        }).catch(error => {
            this.setState({busy: 'Error getting data'});
        })
    }

    render() {
        let busyClass = "crowdedRating";
        if (this.state.busy) {
            if (this.state.busy > 80) {
                busyClass += " darkred"
            } else if (this.state.busy > 65) {
                busyClass += " red"
            } else if (this.state.busy > 45) {
                busyClass += " orange"
            } else if (this.state.busy > 30) {
                busyClass += " yellow"
            } else {
                busyClass += " green"
            }
        } else {
            busyClass += " grey"
        }

        return (
            <div className="storeCard">
                <span className={this.props.opening_hours.open_now ? "openStatus open" : "openStatus closed"}>{this.props.opening_hours.open_now ? "Open" : "Closed"}</span>
                <h1>{this.props.storeName}</h1>
                <h2>{this.props.vicinity}</h2>
                <h3 className={busyClass}>{(this.state.busy) ? this.state.busy : "N/A"}</h3>
            </div>
        )
    }
}
export default StoreCard;