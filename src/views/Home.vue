<template>
    <div>
        <aquire v-if="userScore >= 0.0 && userScore <= 2.5" />
        <convert v-if="userScore >= 2.6 && userScore <= 5.0"/>
        <adopt v-if="userScore >= 5.1 && userScore <= 7.5"/>
        <engage v-if="userScore >= 7.6 && userScore <= 10"/>
    </div>
</template>

<script>
import Convert from '@/subViews/Convert.vue'
import Adopt from '@/subViews/Adopt.vue'
import Engage from '@/subViews/Engage.vue'
import Aquire from '@/subViews/Aquire.vue'
import axios from 'axios'
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
  mounted () {
    axios
      .get(this.endpoint + this.email)
      .then(response => (this.userScore = response))
  }
}
</script>

<style>

</style>