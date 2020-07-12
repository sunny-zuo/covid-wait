import React from "react"
import Layout from "../components/Layout"
import StoreCard from "../components/StoreCard"

class Stores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestData: ''
        }
    }

    componentDidMount() {
        this.setState({requestData: this.props.location.state.requestData});
    }

    render() {
        let StoreCards = '';
        if (this.state.requestData !== '') {
            StoreCards = this.state.requestData.results.map(element => {
                return <li key={element.place_id}><StoreCard storeName={element.name} vicinity={element.vicinity} placeID={element.place_id} opening_hours={element.opening_hours}/></li>
            });
        }
        return (
            <Layout>
                <div className="storeList">
                    <ul>
                        {StoreCards}
                    </ul>
                </div>
            </Layout>
        )
    }
}

export default Stores;