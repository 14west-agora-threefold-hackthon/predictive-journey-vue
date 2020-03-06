<template>
<div>
<form>
      <div class="field">
            <label class="label">Credit Card Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Credit Card Name">
            </div>
        </div>
        <div class="field">
            <label class="label">Credit Card Number</label>
            <div class="control">
                <input class="input" type="text" placeholder="Credit Card Number">
            </div>
        </div>
        <div class="field">
            <label class="label">CSV</label>
            <div class="control">
                <input class="input" type="text" placeholder="CSV">
            </div>
        </div>

  </form>
        <a href="/purchase" v-on:click="updateUser" class="custom-button button">
            Purchase Package
        </a>
</div>
  
</template>

<script>
import axios from 'axios'
export default {
    name: 'PaymentDetails',
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
                window.location = '/purchase';
            })

        }
    }
}
</script>

<style>

</style>