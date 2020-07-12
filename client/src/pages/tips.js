import React from "react"
import Layout from "../components/Layout"
import "../stylesheets/tips.css"

export default function Tips() {
    return (
        <Layout>
            <h2>Tips to Stay Safe While Grocery Shopping</h2>
            <h3>To help protect yourself, essential grocery store workers, and other shoppers, keep these tips in mind:</h3>
            <br />
            <div className="tips">
                <div className="tip">
                    <img src="https://lh3.googleusercontent.com/proxy/vuzDq2B4mccTfYelpYKGxPQDisvwDklBCI4ACsUDVbGjm2SCHsY7WCx5b_9DJsKewijqSdHobJ49k5AhKS-kezNf5intWpo"></img>
                    <p>Avoid going to stores if you're sick, even with mild symptoms</p>
                </div>
                <div className="tip">
                    <img src="https://media.istockphoto.com/vectors/medical-mask-vector-id1190697682?k=6&m=1190697682&s=612x612&w=0&h=5RlrWhqbEmEzvdJvNeVlRMlzu23n_EJ1lzWaWcvZPAw="></img>
                    <p>Wear a face mask. Some stores may make face coverings mandatory</p>
                </div>
                <div className="tip">
                    <img src="https://webstockreview.net/images/buy-clipart-normal-person-1.jpg"></img>
                    <p>Go alone to minimize the number of people in the store at one time</p>
                </div>
                <div className="tip">
                    <img src="https://images.vexels.com/media/users/3/129291/isolated/preview/82f8093f863fff6a22075343fd295726-bar-graph-infographic-5-by-vexels.png"></img>
                    <p>Avoid going during peak times. Use our handy COVID Wait tool to help find the safest times and grocery stores in your area</p>
                </div>
                <div className="tip">
                    <img src="https://cdn.pixabay.com/photo/2020/03/21/15/25/social-4954309_960_720.png"></img>
                    <p>Practice social distancing by keeping at least 2 metres (6 ft) apart from other shoppers and employees</p>
                </div>
                <div className="tip">
                    <img src="https://lh3.googleusercontent.com/proxy/4ahKMAdHkGCLXJeAeklZNDLjGVxaSzer_NTu_TS28NvVZXym9OEEgJkcM9EYaYOWbGUDuWSK0TXwlf-YS8kxOC1xD8iuHMZW2sbXdXJn2mlhtNo"></img>
                    <p>Only buy 1-2 weeks worth of groceries at a time to avoid creating unnecessary demand which leads to temporary shortages</p>
                </div>
                <div className="tip">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZYF0o895qgKokegurenhcvRkYCGXx61oEZg&usqp=CAU"></img>
                    <p>Prepare a shopping list to help minimize the amount of time you spend in the store</p>
                </div>
                <div className="tip">
                    <img src="https://www.healthygreenschools.org/wp-content/uploads/icon-10-1.png"></img>
                    <p>Wash your hands with warm water and soap before heading out, when you return home, and after putting away your groceries. If soap and water are not avaliable, use alcohol based hand sanitizer that contains at least 60% alcohol</p>
                </div>
                <div className="tip">
                    <img src="https://lh3.googleusercontent.com/proxy/A__K07f0GSwBwwkPvR6bdmnCTcui-uXTkCjL6OCSFsWWMkxOh9nKC_a4MewR55qN7vXzt1iaOQkNBCg6JPyZKExPfUcY8SSnuUwm"></img>
                    <p>Only handle produce you intend to buy</p>
                </div>
                <div className="tip">
                    <img src="https://clipartart.com/images/antiseptic-wipes-clipart.jpg"></img>
                    <p>Use disinfectant wipes (either use the ones provided by the store or bring your own) to wipe down the handles of your shopping cart or basket</p>
                </div>
                <div className="tip">
                    <img src="https://webstockreview.net/images/hand-clipart-purse-19.png"></img>
                    <p>If you choose to use reusable shopping bags, make sure that they area cleaned and washed before/after every use</p>
                </div>
            </div>
        </Layout>
    )
}