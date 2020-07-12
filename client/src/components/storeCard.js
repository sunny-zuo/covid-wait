import React from "react"
import "./storeCard.css"

class StoreCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="storeCard">
                <span className={this.props.opening_hours.open_now ? "openStatus open" : "openStatus closed"}>{this.props.opening_hours.open_now ? "Open" : "Closed"}</span>
                <h1>{this.props.storeName}</h1>
                <h2>{this.props.vicinity}</h2>
            </div>
        )
    }
}
export default StoreCard;