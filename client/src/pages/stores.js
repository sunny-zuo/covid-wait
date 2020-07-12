import React from "react"
import Layout from "../components/Layout"

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
        return (
            <Layout>
                <div className="storeList">
                    {this.state.requestData}
                </div>
            </Layout>
        )
    }
}

export default Stores;