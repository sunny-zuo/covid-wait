import React from "react"
import "./storeCard.css"

class StoreCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            busy: '',
            historical: ''
        }
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:5000/api/popularity?place_id=${this.props.placeID}`, {
            method: 'GET'
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({ busy: data.result?.current_popularity, historical: data.result?.populartimes });
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

        let historicalInfo = ""
        if (this.state.historical) {
            const date = new Date();
            let day = date.getDay() - 1;
            if (day === -1) { day = 6 };
            console.log(this.state.historical[day].data[date.getHours() + 1]);
            if (this.state.historical) {
                historicalInfo = `Next Hour Estimate: ${this.state.historical[day].data[date.getHours() + 1]}`
            }
        } else {
            historicalInfo = 'No Estimate Available'
        }

        return (
            <div className="storeCard">
                <img src={this.props.image} />
                <span className={this.props.opening_hours.open_now ? "openStatus open" : "openStatus closed"}>{this.props.opening_hours.open_now ? "Open" : "Closed"}</span>
                <h1>{this.props.storeName}</h1>
                <h2>{this.props.vicinity}</h2>
                <br/>
                <h4>{historicalInfo}</h4>
                <h3 className={busyClass}>{(this.state.busy) ? this.state.busy : "N/A"}</h3>
            </div>
        )
    }
}
export default StoreCard;