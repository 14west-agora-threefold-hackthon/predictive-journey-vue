<template>
    <div class="getting-started">
        <h2>Pick up where you left off</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum id quae, odio deserunt cumque modi consectetur consequatur dolores rem quam voluptas quia temporibus esse facere minima debitis natus ipsa maiores!</p>
        <div class="tile is-ancestor">
            <div class="tile is-6 is-vertical  is-parent">
                <div  v-on:click="updateUser" class="tile is-child box notification is-primary">
                <p class="title">Premium Content</p>
                <p>You have ten new premium articles to view.</p>
                </div>
                <div class="tile is-child box notification is-info">
                <p class="title">Stocks & Porftolios</p>
                <p>View the stocks and portfolios that we recommended for you.</p>
                </div>
            </div>
            <div class="tile is-6 is-vertical  is-parent">
                <div class="tile is-child box notification is-warning">
                <p class="title">Chat to a guru</p>
                <p>There are 5 places left in the Guru’s webinar. Book today.</p>
                </div>
                <div class="tile is-child box notification is-danger">
                <p class="title">Latest ideas</p>
                <p>We’ve got a new offer only for you. Check it out today.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'WelcomeBack',
    data () {
        return {
            endpoint: 'http://predictive-journey-journey-men.apps.threefold.x1l7.p1.openshiftapps.com/customer/update',
            result: '',
            payload: {
                "emailAddress" : this.$route.query.email,
                "bsLastPurchaseSince" : "1",
                "bsLifetimeRevenue" : "2000",
                "bsLifetimeVisits" : "50",
                "bsPredictiveEngagementPercentile" : "100",
                "bsPredictivePurchaseIntent" : "100",
                "bsPredictiveRetention" : "50",
                "mwSubsCount" : "2",
                "mwListsCount" : "5"
            }
        }
    },
    methods: {
        updateUser: function (event){
            event.preventDefault()
            axios
            .post(this.endpoint, this.payload)
            .then( result => {
                this.result = result
                window.location = '/content';
            })

        }
    }
}
</script>

<style>
.getting-started{
    padding: 2.5em 0;
}
</style>