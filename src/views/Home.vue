<template>
    <div>
        <aquire v-if="fakeData === 'aquire'"/>
        <convert v-if="fakeData === 'convert'"/>
        <adopt v-if="fakeData === 'adopt'"/>
        <engage v-if="fakeData === 'engage'"/>

    </div>
</template>

<script>
import Convert from '@/subViews/Convert.vue'
import Adopt from '@/subViews/Adopt.vue'
import Engage from '@/subViews/Engage.vue'
import Aquire from '@/subViews/Aquire.vue'
// import axios from 'axios'
export default {
    name: 'Home',
    components: {
        Convert,
        Adopt,
        Engage,
        Aquire
    },
    data () {
    return {
      fakeData: 'convert',
      endpoint: 'http://predictive-journey-journey-men.apps.threefold.x1l7.p1.openshiftapps.com/score/emailaddress/',
      email: 'email@address.com',
      userScore: 0
    }
  },
  // mounted () {
  //   axios
  //     .get(this.endpoint + this.email)
  //     .then(response => (this.userScore = response))
  // }
}
</script>

<style>

</style>